import React from "react";
import { CURRENCIES } from "../../lib/constants";
import CurrencyItem from "../ui/CurrencyItem";

export default function CurrencyList({
  items,
  values = {},
  baseCurrency = "AUD",
  baseAmount = 1,
}) {
  return (
    <div>
      {items.map((currencyCode, index) => {
        const currency = CURRENCIES[currencyCode];
        const value = values[currencyCode] ?? 0;
        const rate = baseAmount !== 0 ? value / baseAmount : 0;

        return (
          <div
            key={currencyCode}
          >
            <CurrencyItem
              currency={currency}
              value={value}
              rate={rate}
              baseCurrency={baseCurrency}
            />
          </div>
        );
      })}
    </div>
  );
}
