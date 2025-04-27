import React from "react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className={`bg-white rounded-xl shadow-lg flex flex-col w-[95%] md:w-[90%] max-w-4xl h-[90vh] ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-lg">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
