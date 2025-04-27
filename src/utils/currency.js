/**
 * Converts USD-based rates to AUD-based rates
 * @param {Object} usdRates - Exchange rates with USD as base
 * @returns {Object} Exchange rates with AUD as base
 */
export const convertToAudBase = (usdRates) => {
  const audRate = usdRates.AUD;
  const convertedRates = {};

  Object.entries(usdRates).forEach(([currency, rate]) => {
    convertedRates[currency] = rate / audRate;
  });

  return convertedRates;
};

/**
 * Calculates exchange rate with AUD base from USD based rates
 * @param {number} currencyRate - Rate of target currency to USD
 * @param {number} audRate - Rate of AUD to USD
 * @returns {number} Exchange rate with AUD as base currency
 */
export const calculateAudBasedRate = (currencyRate, audRate) => {
  return currencyRate / audRate;
};

/**
 * Formats a number to a fixed decimal places with proper rounding
 * @param {number} value - Number to format
 * @param {number} decimals - Number of decimal places (default: 4)
 * @returns {number} Formatted number
 */
export const formatExchangeRate = (value, decimals = 4) => {
  return Number(value.toFixed(decimals));
};

/**
 * Sorts historical rates by date
 * @param {Array<{date: string, rate: number}>} rates - Array of historical rates
 * @returns {Array<{date: string, rate: number}>} Sorted rates
 */
export const sortHistoricalRates = (rates) => {
  return rates.sort((a, b) => new Date(a.date) - new Date(b.date));
};
