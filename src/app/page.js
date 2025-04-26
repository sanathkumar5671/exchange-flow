'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await fetch('/api/rates');
        
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        
        const data = await response.json();
        setRates(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching rates:', err);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchRates();
  }, []);

  if (loading) return <div className="container mx-auto p-4">Loading exchange rates...</div>;
  
  if (error) return <div className="container mx-auto p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exchange Rates</h1>
      <p className="mb-4">Base Currency: {rates.base}</p>
      <p className="mb-4">Last Updated: {new Date(rates.timestamp * 1000).toLocaleString()}</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Currency</th>
              <th className="py-2 px-4 border-b">Rate</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rates.rates).map(([currency, rate]) => (
              <tr key={currency} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{currency}</td>
                <td className="py-2 px-4 border-b">{rate.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
