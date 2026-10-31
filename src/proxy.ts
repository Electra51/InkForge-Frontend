// import { NextRequest, NextResponse } from "next/server";
// import { Roles } from "./constants/role";
// import { userService } from "./services/user.service";

// export async function proxy(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   let isAuthenticated = false;
//   let isAdmin = false;

//   const { data } = await userService.getSession();

//   if (data) {
//     isAuthenticated = true;
//     isAdmin = data.user.role === Roles.admin;

//     console.log("...", data.user.role, Roles.admin);
//   }

//   if (!isAuthenticated) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   console.log(data);

//   if (isAdmin && pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/admin-dashboard", request.url));
//   }

//   if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/dashboard",
//     "/dashboard/:path*",
//     "/admin-dashboard/:path*",
//     "/admin-dashboard",
//   ],
// };

import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

// Proxy shudhu "login ache kina" cheap check kore (backend fetch nai, tai fast).
// Role-er asol check hoy layout + page-e (src/lib/auth-guard.ts).
export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard/:path*",
    "/admin-dashboard",
  ],
};
