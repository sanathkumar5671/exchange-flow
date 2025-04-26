import React from "react";

export default function Card({ children, title, subtitle, className = "" }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md  p-6 ${className}`}
    >
      {(title || subtitle) && (
        <div className="text-center mb-6">
          {title && (
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
          )}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
