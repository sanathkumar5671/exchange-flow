// src/components/currency/CurrencyConverter.js
import React from "react";
import { useExchangeRates } from "../../hooks/useExchangeRates";
import CurrencyList from "./CurrencyList";
import Card from "../ui/Card";
import Input from "../ui/Input";
import LoadingState from "../ui/LoadingState";
import CurrencyFlag from "../ui/CurrencyFlag";
import {
  CURRENCIES,
  TARGET_CURRENCIES,
  BASE_CURRENCY,
} from "../../lib/constants";
import "flag-icons/css/flag-icons.min.css";

export default function ExchangeFlowConverter() {
  const {
    amount,
    setAmount,
    isLoading,
    error,
    convertedAmounts,
    baseCurrency,
  } = useExchangeRates();

  // Handle amount input changes
  const handleAmountChange = (e) => {
    const value = e.target.value;

    // Only update the state if the value is a valid number or empty
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value === "" ? 0 : parseFloat(value));
    }
  };

  // Calculator icon as SVG for the input
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

  // Currency selector with flag
  const CurrencySelector = () => (
    <div className="flex items-center cursor-pointer pr-4 h-full border-r border-gray-200">
      <CurrencyFlag countryCode={CURRENCIES[BASE_CURRENCY].countryCode} size="small" />
      <span className="mx-2 font-medium">{BASE_CURRENCY}</span>
    </div>
  );

  return (
    <Card
      title="Exchange Flow Converter"
      subtitle="Convert Australian Dollars to major world currencies"
      className="max-w-lg mx-auto"
    >
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <Input
        id="amountInput"
        value={amount}
        onChange={handleAmountChange}
        disabled={isLoading}
        placeholder="0.00"
        icon={<CurrencySelector />}
        endAdornment={<CalculatorIcon />}
      />

      <div className="mt-5"></div>

      {isLoading ? (
        <LoadingState type="table" rows={5} />
      ) : (
        <CurrencyList
          items={TARGET_CURRENCIES}
          values={convertedAmounts}
          baseCurrency={BASE_CURRENCY}
          baseAmount={amount}
        />
      )}
    </Card>
  );
}
