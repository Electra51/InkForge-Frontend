export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] w-full flex-col items-center justify-center gap-4">
      {/* Modern Spinner */}
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute h-full w-full rounded-full border-4 border-zinc-200 dark:border-zinc-800"></div>
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-zinc-900 border-t-transparent dark:border-zinc-100 dark:border-t-transparent"></div>
      </div>

      {/* Loading Text */}
      <p className="animate-pulse text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Loading, please wait...
      </p>
    </div>
  );
}
