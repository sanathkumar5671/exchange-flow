// src/components/ui/Input.js
import React from 'react';

export default function Input({ 
  label, 
  id, 
  value, 
  onChange, 
  error,
  disabled = false,
  ...props 
}) {
  return (
    <div className="w-full mb-6">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <input
          id={id}
          value={value}
          onChange={onChange}
          className={`
            block w-full rounded-md border-0 py-3 }
            ring-1 ring-inset ring-gray-300 focus:ring-blue-500
            focus:ring-2 outline-none transition-colors
          `}
          disabled={disabled}
          {...props}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}