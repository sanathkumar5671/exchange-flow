"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchLatestRates, fetchHistoricalRates } from "../lib/utils";
import { TARGET_CURRENCIES, BASE_CURRENCY } from "../lib/constants";

export function useExchangeRates() {
  const [amount, setAmount] = useState(1);
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [isHistoricalLoading, setIsHistoricalLoading] = useState(false);

  const fetchRates = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchLatestRates();
      setRates(data.rates);
    } catch (err) {
      setError("Failed to fetch exchange rates. Please try again later.");
      console.error("Error in fetchRates:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchHistorical = useCallback(async (currency) => {
    if (!currency) return;

    setIsHistoricalLoading(true);
    setError(null);

    try {
      const data = await fetchHistoricalRates(currency);
      setHistoricalData({
        currency,
        data: data.historicalRates,
      });
    } catch (err) {
      setError(
        `Failed to fetch historical data for ${currency}. Please try again later.`
      );
      console.error("Error in fetchHistorical:", err);
    } finally {
      setIsHistoricalLoading(false);
    }
  }, []);

  const convertAmount = useCallback(
    (amountValue) => {
      if (!rates || Object.keys(rates).length === 0) {
        return {};
      }

      return TARGET_CURRENCIES.reduce((acc, curr) => {
        acc[curr] = (amountValue * rates[curr]).toFixed(2);
        return acc;
      }, {});
    },
    [rates]
  );

  const selectCurrency = useCallback(
    (currency) => {
      setSelectedCurrency(currency);
      fetchHistorical(currency);
    },
    [fetchHistorical]
  );

  const convertedAmounts = useMemo(() => {
    return convertAmount(amount);
  }, [amount, convertAmount]);

  // Fetch the latest rates when the component mounts
  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return {
    amount,
    setAmount,
    rates,
    isLoading,
    error,
    selectedCurrency,
    selectCurrency,
    historicalData,
    isHistoricalLoading,
    convertedAmounts,
    baseCurrency: BASE_CURRENCY,
  };
}
