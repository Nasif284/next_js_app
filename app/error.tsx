"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-center px-4">
      <h1 className="text-5xl font-bold text-red-600">500</h1>

      <h2 className="text-2xl font-semibold mt-4 text-gray-800">Something went wrong</h2>

      <p className="text-gray-600 mt-2">{error.message}</p>

      <button onClick={() => reset()} className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
        Try Again
      </button>
    </div>
  );
}
