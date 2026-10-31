import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = env.AUTH_URL;
export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      console.log("cookie", cookieStore.toString());

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (session === null) {
        return { data: null, error: { message: "Something went wrong" } };
      }
      return { data: session, error: null }; //return na korle onno jaygay theke pabo na
    } catch (err) {
      console.error(err);
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
