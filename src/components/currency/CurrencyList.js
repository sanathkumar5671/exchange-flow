import React from "react";
import { CURRENCIES } from "../../lib/constants";
import CurrencyItem from "../ui/CurrencyItem";

export default function CurrencyList({
  items,
  values = {},
  baseCurrency = "AUD",
  baseAmount = 1,
  onSelectCurrency,
  selectedCurrency,
}) {
  return (
    <div>
      {items.map((currencyCode, index) => {
        const currency = CURRENCIES[currencyCode];
        const valueRaw = values[currencyCode] ?? 0;
        const value =
          typeof valueRaw === "string" ? parseFloat(valueRaw) : valueRaw;
        const rate = baseAmount !== 0 ? value / baseAmount : 0;
        const isSelected = selectedCurrency === currencyCode;

        return (
          <div
            key={currencyCode}
            onClick={() => onSelectCurrency && onSelectCurrency(currencyCode)}
            className={isSelected ? "ring-2 ring-blue-400 rounded-xl" : ""}
            style={{ cursor: onSelectCurrency ? "pointer" : "default" }}
          >
            <CurrencyItem
              currency={currency}
              value={value}
              rate={rate}
              baseCurrency={baseCurrency}
              isSelected={isSelected}
            />
          </div>
        );
      })}
    </div>
  );
}
