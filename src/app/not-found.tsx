import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
        {/* Large 404 Badge / Illustration */}
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
          <span className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
            404
          </span>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Page Not Found
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Sorry, we couldn’t find the resource or page you were looking for.
            It might have been moved or deleted.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
