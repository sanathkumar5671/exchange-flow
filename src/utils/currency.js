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