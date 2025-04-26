import React from 'react';
import { CURRENCIES } from '../../lib/constants';

export default function CurrencyList({ 
  items, 
  values = {}, 
}) {
  
  return (
    <div className="overflow-hidden border rounded-lg my-6">
      <ul className="divide-y divide-gray-200">
        {items.map((currencyCode) => {
          const currency = CURRENCIES[currencyCode];
          const value = values[currencyCode];
          
          return (
            <li 
              key={currencyCode}
              className={`
                flex justify-between items-center p-4
                hover:bg-gray-50 cursor-pointer transition-all duration-300
              `}
            >
              <div className="flex items-center">
                <span className={`
                  text-2xl mr-3
                `} aria-hidden="true">
                  {currency.flag}
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {currency.code}
                  </div>
                  <div className="text-sm text-gray-500">
                    {currency.name}
                  </div>
                </div>
              </div>
              
              {value && (
                <div className="text-gray-900 font-medium">
                  {currency.symbol}{value}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}