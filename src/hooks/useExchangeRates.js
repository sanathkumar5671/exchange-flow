"use client";
import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchLatestRates } from '../lib/api';
import { TARGET_CURRENCIES, BASE_CURRENCY, CURRENCIES } from '../lib/constants';

export function useExchangeRates() {
  // State for managing the currency converter
  const [amount, setAmount] = useState(1);
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch latest exchange rates
  const fetchRates = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchLatestRates();
      setRates(data.rates);
    } catch (err) {
      setError('Failed to fetch exchange rates. Please try again later.');
      console.error('Error in fetchRates:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  
  // Convert an amount from the base currency to all target currencies
  const convertAmount = useCallback((amountValue) => {
    if (!rates || Object.keys(rates).length === 0) {
      return {};
    }
    
    return TARGET_CURRENCIES.reduce((acc, curr) => {
      acc[curr] = (amountValue * rates[curr]).toFixed(2);
      return acc;
    }, {});
  }, [rates]);
  
  
  // Memorized conversion result based on current amount
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
    convertedAmounts,
    baseCurrency: BASE_CURRENCY,
    currencies: CURRENCIES
  };
}