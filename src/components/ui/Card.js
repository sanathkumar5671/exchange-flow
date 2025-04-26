import React from 'react';

export default function Card({ children, title, subtitle, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h1 className="text-2xl font-bold mb-2">{title}</h1>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}