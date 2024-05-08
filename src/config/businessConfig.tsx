import { MenuItem } from "../layoutComponents/AppMenu";

export const logoImageUrl = "https://tcw-icon.s3.us-west-2.amazonaws.com/7.png";
export const primaryColor = "#4312e5";

export const mainMenuItems: MenuItem[] = [
  {
    title: "Guides",
    children: [
      {
        href: "/",
        title: "Introduction",
        children: [
          {
            href: "/",
            title: "Guides",
          },
          {
            href: "/",
            title: "Resources",
          },
        ],
      },
    ],
  },
  {
    title: "All Products",
    children: [
      {
        href: "/step-workflow",
        title: "Step Workflow",
      },
      {
        href: "/email-notification-workflow",
        title: "Email Notification Workflow",
      },
    ],
  },
];

export const docPagination = {
  "/step-workflow": {
    next: "/step-workflow/quickstart",
    nextLabel: "Quickstart",
  },
  "/step-workflow/quickstart": {
    prev: "/step-workflow",
    prevLabel: "Introduction",
  },
};

const stepWorkflowMenuItems: MenuItem[] = [
  {
    title: "Getting Started",
    children: [
      {
        href: "/step-workflow",
        title: "Introduction",
        children: [
          {
            href: "/step-workflow#overview",
            title: "Overview",
          },
          {
            href: "/step-workflow#guideline",
            title: "Guideline",
          },
        ],
      },
      {
        href: "/step-workflow/quickstart",
        title: "Quickstart",
        children: [
          {
            href: "/step-workflow/quickstart#set-up-a-client",
            title: "Set up a client",
          },
        ],
      },
    ],
  },
];

export const siderMenu = {
  "": mainMenuItems,
  "step-workflow": stepWorkflowMenuItems,
};

export const getSiderItems = (path: string) => {
  const first = path.split("/")?.[1];

  if (!first || !(first in siderMenu)) {
    return mainMenuItems;
  }

  return siderMenu[first as keyof typeof siderMenu];
};
