import { Route } from "@/types";

export const userRoutes: Route[] = [
  {
    title: "Workspace",

    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        title: "My Posts",
        url: "/dashboard/my-posts",
      },
      {
        title: "Create New Post",
        url: "/dashboard/create-post",
      },
      {
        title: "Draft",
        url: "/dashboard/draft-post",
      },
      {
        title: "Comments",
        url: "/dashboard/comments",
      },
    ],
  },
  {
    title: "Personal",

    items: [
      {
        title: "Bookmarks",
        url: "/dashboard/bookmarks",
      },
      {
        title: "Liked Posts",
        url: "/dashboard/liked-posts",
      },
      {
        title: "My Profile",
        url: "/dashboard/my-profile",
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
      },
    ],
  },
  {
    title: "",

    items: [
      {
        title: "Visit Website",
        url: "/",
      },
      {
        title: "Logout",
        url: "/",
      },
    ],
  },
];
