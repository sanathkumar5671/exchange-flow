// src/components/currency/CurrencyConverter.js
import React from 'react';
import { useExchangeRates } from '../../hooks/useExchangeRates';
import CurrencyList from './CurrencyList';
import ExchangeChart from './ExchangeChart';
import Card from '../ui/Card';
import Input from '../ui/Input';
import LoadingState from '../ui/LoadingState';
import { CURRENCIES, TARGET_CURRENCIES } from '../../lib/constants';

export default function CurrencyConverter() {
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
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value === '' ? 0 : parseFloat(value));
    }
  };

  return (
    <Card 
      title="Exchange Flow Converter" 
      subtitle="Convert Australian Dollars to major world currencies"
      className="max-w-4xl mx-auto"
    >
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}
      
      <Input
        label="Amount to Convert"
        id="amountInput"
        value={amount}
        onChange={handleAmountChange}
        disabled={isLoading}
        placeholder="0.00"
      />
      
      {isLoading ? (
        <LoadingState type="table" rows={5} />
      ) : (
        <CurrencyList
          items={TARGET_CURRENCIES}
          values={convertedAmounts}
          animationEnabled={true}
        />
      )}
    </Card>
  );
}