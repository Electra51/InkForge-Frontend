import Link from "next/link";

export function Unauthorized() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold">403 - Access Denied</h1>

      <p className="text-muted-foreground">
        You do not have permission to access this page.
      </p>

      <Link
        href="/dashboard"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
