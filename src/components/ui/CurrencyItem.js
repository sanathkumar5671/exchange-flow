import React from "react";
import "flag-icons/css/flag-icons.min.css";
import CurrencyFlag from "./CurrencyFlag";

export default function CurrencyItem({ currency, value, rate, baseCurrency }) {
  return (
    <div
      className="my-2 bg-gray-100 rounded-xl shadow-sm border border-gray-200 p-5 transition-shadow duration-200 ease-in-out hover:shadow-lg hover:border-blue-200"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-2">
          <CurrencyFlag countryCode={currency.countryCode} />
          <div className="ml-2 font-semibold text-gray-800 text-lg tracking-wide">
            {currency.code}
          </div>
        </div>

        <div className="flex flex-col items-end w-2/3 pr-2">
          {value && (
            <>
              <div className="text-xl font-bold text-gray-900">
                {currency.symbol} {value.toFixed(2)}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                1 {baseCurrency} = {rate.toFixed(4)} {currency.code}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}