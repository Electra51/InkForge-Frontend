import { isAdmin } from "@/constants/role";
import { userService } from "@/services/user.service";
import { redirect } from "next/navigation";
import { cache } from "react";

// cache() er karone ek request-e layout + page duita theke call korleo
// backend-e shudhu ekbar-i session fetch hoy
export const getSession = cache(async () => {
  const { data } = await userService.getSession();
  return data;
});

type RequiredRole = "admin" | "user";

export async function requireRole(required: RequiredRole) {
  const session = await getSession();

  if (!session?.user) redirect("/login");

  const admin = isAdmin(session.user.role);

  if (required === "admin" && !admin) redirect("/dashboard");
  if (required === "user" && admin) redirect("/admin-dashboard");

  return session.user as {
    name: string;
    email: string;
    image?: string | null;
    role?: string | null;
  };
}
