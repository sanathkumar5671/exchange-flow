export const CURRENCIES = {
    AUD: {
      code: "AUD",
      name: "Australian Dollar",
      symbol: "A$",
      flag: "🇦🇺",
    },
    USD: {
      code: "USD",
      name: "US Dollar",
      symbol: "$",
      flag: "🇺🇸",
    },
    EUR: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
      flag: "🇪🇺",
    },
    INR: {
      code: "INR",
      name: "Indian Rupee",
      symbol: "₹",
      flag: "🇮🇳",
    },
    CAD: {
      code: "CAD",
      name: "Canadian Dollar",
      symbol: "C$",
      flag: "🇨🇦",
    },
    NZD: {
      code: "NZD",
      name: "New Zealand Dollar",
      symbol: "NZ$",
      flag: "🇳🇿",
    },
  };
  
  // The base currency used for all conversions
  export const BASE_CURRENCY = "AUD";
  
  // Target currencies (excluding the base currency)
  export const TARGET_CURRENCIES = Object.keys(CURRENCIES).filter(
    (currency) => currency !== BASE_CURRENCY
  );
  
  // Number of historical days to fetch
  export const HISTORICAL_DAYS = 14;
  
  // API configuration constants
  export const API_CONFIG = {
    BASE_URL: "https://openexchangerates.org/api",
  };