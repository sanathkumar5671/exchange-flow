import React from "react";

export default function LoadingState({ rows = 5 }) {
  return (
    <div className="mt-24">
      <div className="animate-pulse space-y-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-100 bg-white hover:border-gray-200"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="h-5 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-5 bg-gray-200 rounded w-32"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
