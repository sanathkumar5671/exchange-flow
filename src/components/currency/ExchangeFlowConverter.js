import React from "react";
import { useExchangeRates } from "../../hooks/useExchangeRates";
import CurrencyList from "./CurrencyList";
import Input from "../ui/Input";
import LoadingState from "../ui/LoadingState";
import CurrencyFlag from "../ui/CurrencyFlag";
import {
  CURRENCIES,
  TARGET_CURRENCIES,
  BASE_CURRENCY,
} from "../../lib/constants";
import "flag-icons/css/flag-icons.min.css";
import ExchangeChart from "./ExchangeChart";

export default function ExchangeFlowConverter() {
  const {
    amount,
    setAmount,
    isLoading,
    error,
    convertedAmounts,
    selectCurrency,
    selectedCurrency,
    historicalData,
    isHistoricalLoading,
  } = useExchangeRates();

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value === "" ? 0 : parseFloat(value));
    }
  };

  const CalculatorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="8" x2="8" y1="14" y2="14" />
      <line x1="12" x2="12" y1="14" y2="14" />
      <line x1="16" x2="16" y1="14" y2="14" />
      <line x1="8" x2="8" y1="18" y2="18" />
      <line x1="12" x2="12" y1="18" y2="18" />
      <line x1="16" x2="16" y1="18" y2="18" />
    </svg>
  );

  const CurrencySelector = () => (
    <div className="flex items-center cursor-pointer pr-4 h-full border-r border-gray-200">
      <CurrencyFlag
        countryCode={CURRENCIES[BASE_CURRENCY].countryCode}
        size="small"
      />
      <span className="mx-2 font-medium">{BASE_CURRENCY}</span>
    </div>
  );

  const handleSelectCurrency = (currencyCode) => {
    selectCurrency(currencyCode);
  };
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col p-0 m-0">
      <div className="w-full px-0 md:px-16 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Exchange Flow Converter
          </h1>
          <p className="text-gray-600">
            Convert {CURRENCIES[BASE_CURRENCY].name}s to major world currencies
          </p>
        </div>
        <div className="w-full mb-8">
          <Input
            id="amountInput"
            value={amount}
            onChange={handleAmountChange}
            disabled={isLoading}
            placeholder="0.00"
            icon={<CurrencySelector />}
            endAdornment={<CalculatorIcon />}
          />
        </div>
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600">{error}</p>
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-8 w-full h-[70vh]">
          <div className="w-full md:w-1/3 h-full overflow-y-auto pr-2">
            {isLoading ? (
              <LoadingState type="table" rows={5} />
            ) : (
              <CurrencyList
                items={TARGET_CURRENCIES}
                values={convertedAmounts}
                baseCurrency={BASE_CURRENCY}
                baseAmount={amount}
                onSelectCurrency={handleSelectCurrency}
                selectedCurrency={selectedCurrency}
              />
            )}
          </div>
          <div className="w-full md:w-2/3 h-full flex items-center justify-center bg-white rounded-xl shadow border border-gray-200">
            {isHistoricalLoading ? (
              <div className="flex items-center justify-center h-64 w-full">
                <LoadingState rows={3} />
              </div>
            ) : historicalData ? (
              <ExchangeChart
                historicalData={historicalData}
                baseCurrency={BASE_CURRENCY}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
