export const CURRENCIES = {
  AUD: {
    code: "AUD",
    name: "Australian Dollar",
    symbol: "A$",
    flag: "🇦🇺",
    countryCode: "au",
  },
  USD: {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    flag: "🇺🇸",
    countryCode: "us",
  },
  EUR: {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    flag: "🇪🇺",
    countryCode: "eu",
  },
  INR: {
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳",
    countryCode: "in",
  },
  CAD: {
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "C$",
    flag: "🇨🇦",
    countryCode: "ca",
  },
  NZD: {
    code: "NZD",
    name: "New Zealand Dollar",
    symbol: "NZ$",
    flag: "🇳🇿",
    countryCode: "nz",
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
