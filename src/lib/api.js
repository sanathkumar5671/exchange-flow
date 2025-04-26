// lib/api.js
/**
 * API Client Functions
 * Functions to interact with the application's backend API endpoints
 */

/**
 * Fetches the latest exchange rates for the base currency
 * @returns {Promise<Object>} Object containing exchange rates
 */
export const fetchLatestRates = async () => {
    try {
      const response = await fetch('/api/rates');
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching latest rates:', error);
      throw error;
    }
  };
  
  /**
   * Fetches historical exchange rates for a specific currency
   * @param {string} currency - The currency code to fetch historical data for
   * @returns {Promise<Object>} Object containing historical exchange rates
   */
  export const fetchHistoricalRates = async (currency) => {
    try {
      const response = await fetch(`/api/historical?currency=${currency}`);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching historical rates for ${currency}:`, error);
      throw error;
    }
  };