import { MenuItem } from "../layoutComponents/AppMenu";

export const logoImageUrl = "https://tcw-icon.s3.us-west-2.amazonaws.com/7.png";
export const primaryColor = "#4312e5";

export const mainMenuItems: MenuItem[] = [
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
        href: "/step-workflow/getting-started/introduction",
        title: "Introduction",
        children: [
          {
            href: "/step-workflow/getting-started/introduction#overview",
            title: "Overview",
          },
          {
            href: "/step-workflow/getting-started/introduction#guideline",
            title: "Guideline",
          },
        ],
      },
      {
        href: "/step-workflow/getting-started/quickstart",
        title: "Quickstart",
        children: [
          {
            href: "/step-workflow/getting-started/quickstart#set-up-a-client",
            title: "Set up a client",
          },
          {
            href: "/step-workflow/getting-started/quickstart#create-a-workflow",
            title: "Create a workflow",
          },
          {
            href: "/step-workflow/getting-started/quickstart#add-a-graph",
            title: "Add a graph",
          },
          {
            href: "/step-workflow/getting-started/quickstart#configure-user-api-endpoint",
            title: "Configure user API endpoint",
          },
          {
            href: "/step-workflow/getting-started/quickstart#set-up-api-authentication",
            title: "Set up API authentication",
          },
          {
            href: "/step-workflow/getting-started/quickstart#add-a-retry-policy",
            title: "Add a retry policy",
          },
          {
            href: "/step-workflow/getting-started/quickstart#initiate-a-workflow",
            title: "Initiate a workflow",
          },
          {
            href: "/step-workflow/getting-started/quickstart#whats-next",
            title: "What's next?",
          },
        ],
      },
    ],
  },
  {
    title: "API Reference",
    children: [
      {
        href: "/step-workflow/api-reference/introduction",
        title: "Introduction",
      },
      {
        href: "/step-workflow/api-reference/authentication",
        title: "Authentication",
      },
      {
        href: "/step-workflow/api-reference/api",
        title: "API",
        children: [
          {
            href: "/step-workflow/api-reference/api#initiateworkflow",
            title: "InitiateWorkflow",
            titleDecorator: (
              <span className="font-mono text-[0.625rem] font-semibold leading-6 text-zinc-400 dark:text-zinc-500">
                POST
              </span>
            ),
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

export const graphXml = `<?xml version="1.0" encoding="UTF-8"?>
<workflow name="CreateAccountWorkflow" initialState="Start">
  <state name="PreprocessingData" service="WorkflowOrchestratorService" operation="fake">
    <success name="finalized" goto="InitializeData"/>
  </state>
  <state name="InitializeData" service="WorkflowOrchestratorService" operation="fake">
    <success name="finalized" goto="DataValidation"/>
  </state>
  <state name="DataValidation" service="WorkflowOrchestratorService" operation="fake">
    <success name="finalized" goto="ProcessData"/>
  </state>
  <state name="ProcessData" service="WorkflowOrchestratorService" operation="fake">
    <success name="finalized" goto="TransformData"/>
  </state>
  <state name="TransformData" service="WorkflowOrchestratorService" operation="fake">
    <success name="finalized" goto="LoadData"/>
  </state>
  <state name="LoadData" service="WorkflowOrchestratorService" operation="fake">
    <success name="finalized" goto="FinalizeProcess"/>
  </state>
  <state name="FinalizeProcess" service="WorkflowOrchestratorService" operation="fake">
    <success name="finalized" goto="terminal"/>
  </state>
</workflow>`;
