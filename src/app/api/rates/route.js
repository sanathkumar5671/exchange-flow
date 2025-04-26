import { TARGET_CURRENCIES, BASE_CURRENCY } from "../../../lib/constants";
import { convertToAudBase } from "../../../utils/currency";

const API_KEY = process.env.OPENEXCHANGERATES_API_KEY;

export async function GET() {
  try {
    const url = new URL("https://openexchangerates.org/api/latest.json");

    url.searchParams.append("app_id", API_KEY);
    url.searchParams.append("base", "USD");

    const response = await fetch(url.toString());

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error(
        "Error from OpenExchangeRates API:",
        errorData || response.statusText
      );

      return new Response(
        JSON.stringify({ error: "Failed to fetch exchange rates" }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    const allRates = convertToAudBase(data.rates);
    const convertedRates = {};

    TARGET_CURRENCIES.forEach((currency) => {
      convertedRates[currency] = allRates[currency];
    });

    convertedRates[BASE_CURRENCY] = 1;

    return new Response(
      JSON.stringify({
        base: BASE_CURRENCY,
        timestamp: data.timestamp,
        rates: convertedRates,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in rates API route:", error);

    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
