import { Unauthorized } from "@/components/ui/unauthorized";

export default function AdminDashboardPage() {
  // Temporary testing only
  const user = { role: "admin" };

  if (user.role !== "admin") {
    return <Unauthorized />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <p>Welcome to the admin panel.</p>
    </div>
  );
}
