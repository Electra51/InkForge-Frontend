import { Route } from "@/types";

export const adminRoutes: Route[] = [
  {
    title: "Overview",

    items: [
      {
        title: "Dashboard",
        url: "/admin-dashboard",
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
      },
    ],
  },
  {
    title: "Content Management",

    items: [
      {
        title: "All Posts",
        url: "/dashboard/all-post",
      },
      {
        title: "Pending Approval",
        url: "/dashboard/pending-approval",
      },
      {
        title: "Categories & Tags",
        url: "/dashboard/categories-tags",
      },
      {
        title: "Comment Moderation",
        url: "/dashboard/comment-moderation",
      },
    ],
  },
  {
    title: "User Management",

    items: [
      {
        title: "All Users",
        url: "/dashboard/all-post",
      },
      {
        title: "Roles & Permissions",
        url: "/dashboard/roles-permissions",
      },
    ],
  },
  {
    title: "System",

    items: [
      {
        title: "Reports",
        url: "/dashboard/reports",
      },
      {
        title: "Site Settings",
        url: "/dashboard/site-settings",
      },
      {
        title: "Activity Logs",
        url: "/dashboard/activity-logs",
      },
    ],
  },
];
