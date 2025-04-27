import { BASE_CURRENCY, HISTORICAL_DAYS } from "../../../lib/constants";
import { API_CONFIG } from "../../../lib/config";
import {
  calculateAudBasedRate,
  sortHistoricalRates,
} from "../../../utils/currency";

const API_KEY = process.env.OPENEXCHANGERATES_API_KEY;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const currency = searchParams.get("currency");

    if (!currency) {
      return new Response(
        JSON.stringify({ error: "Currency parameter is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const dates = [];
    const today = new Date();

    for (let i = 0; i < HISTORICAL_DAYS; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);

      const formattedDate = date.toISOString().split("T")[0];
      dates.push(formattedDate);
    }

    const fetchPromises = dates.map(async (date) => {
      const url = new URL(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.HISTORICAL}/${date}.json`
      );
      url.searchParams.append("app_id", API_KEY);
      url.searchParams.append("base", "USD");

      const response = await fetch(url.toString());

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data for ${date}: ${response.statusText}`
        );
      }

      return response.json();
    });

    const results = await Promise.all(fetchPromises);

    const historicalRates = results.map((data, index) => {
      const date = dates[index];
      const audRate = data.rates.AUD;
      const currencyRate = data.rates[currency];

      return {
        date,
        rate: calculateAudBasedRate(currencyRate, audRate),
      };
    });

    const sortedRates = sortHistoricalRates(historicalRates);

    return new Response(
      JSON.stringify({
        base: BASE_CURRENCY,
        target: currency,
        historicalRates: sortedRates,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in historical API route:", error);

    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
