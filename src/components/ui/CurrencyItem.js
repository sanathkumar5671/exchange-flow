import React, { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css";
import CurrencyFlag from "./CurrencyFlag";

export default function CurrencyItem({
  currency,
  value,
  rate,
  baseCurrency,
  isSelected,
}) {
  const numericValue = typeof value === "string" ? parseFloat(value) : value;
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [numericValue]);

  return (
    <div
      className={`my-2 bg-gray-100 rounded-xl shadow-sm border border-gray-200 p-5 transition-shadow duration-200 ease-in-out hover:shadow-lg hover:border-blue-200 ${
        isSelected ? "ring-2 ring-blue-400 border-blue-400" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-2">
          <CurrencyFlag countryCode={currency.countryCode} />
          <div className="ml-2 font-semibold text-gray-800 text-lg tracking-wide">
            {currency.code}
          </div>
        </div>

        <div className="flex flex-col items-end w-2/3 pr-2">
          <div className="font-bold text-gray-900 text-lg md:text-xl max-w-full overflow-x-auto break-all whitespace-nowrap">
            <span key={animateKey} className="inline-block animate-number-flip">
              {currency.symbol} {numericValue.toFixed(2)}
            </span>
          </div>
          {numericValue > 0 && (
            <div className="text-sm text-gray-500 mt-1">
              1 {baseCurrency} = {rate.toFixed(4)} {currency.code}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
