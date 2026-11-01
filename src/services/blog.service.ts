import { env } from "@/env";

const API_URL = env.API_URL;
export const blogService = {
  getBlogPosts: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`);

      const data = await res.json();

      return { data: data, error: null }; //return na korle onno jaygay theke pabo na
    } catch (err) {
      console.error(err);
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
