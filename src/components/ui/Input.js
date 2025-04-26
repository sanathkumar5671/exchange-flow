import React from "react";

export default function Input({
  label,
  id,
  value,
  onChange,
  error,
  disabled = false,
  icon,
  iconPosition = "left",
  endAdornment,
  ...props
}) {
  return (
    <div className="w-full mb-6">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative rounded-md">
        <div
          className={`
          flex items-center w-full rounded-xl overflow-hidden
          border border-blue-400 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500
          transition-all bg-white
        `}
        >
          {icon && iconPosition === "left" && (
            <div className="pl-3 flex items-center justify-center">{icon}</div>
          )}
          <input
            id={id}
            value={value}
            onChange={onChange}
            className={`
              block w-full py-3 px-4
              border-none focus:ring-0 outline-none
              text-gray-900 placeholder:text-gray-400
            `}
            disabled={disabled}
            {...props}
          />
          {endAdornment && (
            <div className="pr-3 flex items-center justify-center">
              {endAdornment}
            </div>
          )}
          {icon && iconPosition === "right" && (
            <div className="pr-3 flex items-center justify-center">{icon}</div>
          )}
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
