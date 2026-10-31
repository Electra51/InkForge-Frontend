import { requireRole } from "@/lib/auth-guard";

export default async function UserDashboard() {
  const user = await requireRole("user");

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <p>Welcome back, {user.name}.</p>
    </div>
  );
}
