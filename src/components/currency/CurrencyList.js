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
        const value = values[currencyCode];
        const rate = value / baseAmount;

        return (
          <div
            key={currencyCode}
            className={index < items.length - 1 ? "mb-10" : ""}
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
