// import { Unauthorized } from "@/components/ui/unauthorized";

// export default function AdminDashboardPage() {
//   // Temporary testing only
//   const user = { role: "admin" };

//   if (user.role !== "admin") {
//     return <Unauthorized />;
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Admin Dashboard</h1>

//       <p>Welcome to the admin panel.</p>
//     </div>
//   );
// }

import { requireRole } from "@/lib/auth-guard";

export default async function AdminDashboardPage() {
  // Layout navigate korle re-render hoy na, tai page-eo check rakha lagbe
  await requireRole("admin");

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <p>Welcome to the admin panel.</p>
    </div>
  );
}
