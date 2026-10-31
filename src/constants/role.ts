export const Roles = {
  admin: "ADMIN",
  user: "USER",
};

// DB-te "admin" ba "ADMIN" jei case-ei thakuk, duto-i kaj korbe
export const isAdmin = (role?: string | null) =>
  role?.toUpperCase() === Roles.admin;

// Admin hole sorasori /admin-dashboard, na hole /dashboard
export const getDashboardUrl = (role?: string | null) =>
  isAdmin(role) ? "/admin-dashboard" : "/dashboard";
