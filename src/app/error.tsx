// "use client";

// import { useEffect } from "react";

// const error = ({
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string };
//   reset: () => void;
// }) => {
//   useEffect(() => {
//     console.error(error);
//   }, []);

//   return (
//     <div>
//       <h2>Something went wrong. Please try again</h2>
//       <button onClick={() => reset()}>Retry</button>
//     </div>
//   );
// };

// export default error;

"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Console error log kore rakha
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-4 rounded-2xl border border-red-100 bg-white p-8 shadow-xl dark:border-red-900/20 dark:bg-zinc-900">
        {/* Error Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <svg
            className="h-6 w-6 text-red-600 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        {/* Heading & Message */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Something went wrong!
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {error?.message ||
              "An unexpected error occurred. Please try again later."}
          </p>
        </div>

        {/* Retry Button */}
        <div className="pt-2">
          <button
            onClick={() => reset()}
            className="w-full rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
