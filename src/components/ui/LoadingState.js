import React from "react";

export default function LoadingState({rows = 5 }) {
  return (
    <div className="my-6 p-4 border rounded-lg">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 rounded mb-3"></div>
        ))}
      </div>
    </div>
  );
}
