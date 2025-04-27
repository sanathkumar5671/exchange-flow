import React, { useState } from "react";
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
import Modal from "../ui/Modal";

export default function ExchangeFlowConverter() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
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

  const ChartModal = () => (
    <Modal
      isOpen={isChartModalOpen}
      onClose={() => setIsChartModalOpen(false)}
      title="Exchange Rate Chart"
      className="md:hidden"
    >
      {isHistoricalLoading ? (
        <div className="flex items-center justify-center h-full w-full p-8">
          <LoadingState rows={3} />
        </div>
      ) : historicalData ? (
        <div className="h-full overflow-x-auto bg-gradient-to-br from-blue-50 to-white rounded-b-2xl">
          <ExchangeChart
            historicalData={historicalData}
            baseCurrency={BASE_CURRENCY}
          />
        </div>
      ) : null}
    </Modal>
  );

  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col p-0 m-0">
      <ChartModal />
      <div className="w-full px-0 md:px-16 py-4 flex flex-col h-full">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Exchange Flow Converter
          </h1>
          <p className="text-gray-600 text-sm">
            Convert {CURRENCIES[BASE_CURRENCY].name}s to major world currencies
          </p>
        </div>
        <div className="w-full mb-4">
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
          <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
        <div className="flex flex-1 flex-col md:flex-row gap-2 w-full h-full">
          <div className="w-full md:w-1/3 h-full min-h-0 overflow-auto pr-2 flex-shrink-0">
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
          <div className="hidden md:block w-full md:w-2/3 h-full min-h-0 bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
            {isHistoricalLoading ? (
              <div className="flex items-center justify-center h-full w-full">
                <LoadingState rows={3} />
              </div>
            ) : historicalData ? (
              <ExchangeChart
                historicalData={historicalData}
                baseCurrency={BASE_CURRENCY}
              />
            ) : null}
          </div>
          <button
            onClick={() => setIsChartModalOpen(true)}
            className="md:hidden fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
