import React from 'react';
import "flag-icons/css/flag-icons.min.css";

export default function CurrencyFlag({ countryCode, size = "normal" }) {
  const sizeClasses = {
    small: "w-6 h-6",
    normal: "w-10 h-10", 
    large: "w-12 h-12"
  };
  
  return (
    <div className={`flag-icon-container ${sizeClasses[size]} rounded-full overflow-hidden shadow-sm`}>
      <span className={`fi fi-${countryCode} text-2xl`}></span>
    </div>
  );
}
