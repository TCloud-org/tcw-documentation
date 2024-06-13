import { MenuHttpMethod } from "../dataDisplayComponents/MenuHttpMethod";
import { MenuItem } from "../layoutComponents/AppMenu";

export const logoImageUrl =
  "https://utfs.io/f/bd04c0a7-53fe-4f53-9c25-e44a5e0afb75-ejb435.png";
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
  "/step-workflow/getting-started/introduction": {
    next: "/step-workflow/getting-started/quickstart",
    nextLabel: "Quickstart",
  },
  "/step-workflow/getting-started/quickstart": {
    prev: "/step-workflow/getting-started/introduction",
    prevLabel: "Introduction",
    next: "/step-workflow/api-reference/introduction",
    nextLabel: "API Reference",
  },
  "/step-workflow/api-reference/introduction": {
    prev: "/step-workflow/getting-started/quickstart",
    prevLabel: "Quickstart",
    next: "/step-workflow/api-reference/authentication",
    nextLabel: "Authentication",
  },
  "/step-workflow/api-reference/authentication": {
    prev: "/step-workflow/api-reference/introduction",
    prevLabel: "API Reference",
    next: "/step-workflow/api-reference/api",
    nextLabel: "API",
  },
  "/step-workflow/api-reference/api": {
    prev: "/step-workflow/api-reference/authentication",
    prevLabel: "Authentication",
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
            titleDecorator: <MenuHttpMethod>POST</MenuHttpMethod>,
          },
          {
            href: "/step-workflow/api-reference/api#getworksindaterange",
            title: "GetWorksInDateRange",
            titleDecorator: <MenuHttpMethod>POST</MenuHttpMethod>,
          },
          {
            href: "/step-workflow/api-reference/api#getworkflowsbyclientid",
            title: "GetWorkflowsByClientId",
            titleDecorator: <MenuHttpMethod>GET</MenuHttpMethod>,
          },
          {
            href: "/step-workflow/api-reference/api#notifyworkflow",
            title: "NotifyWorkflow",
            titleDecorator: <MenuHttpMethod>POST</MenuHttpMethod>,
          },
        ].sort((a, b) => a.title.localeCompare(b.title)),
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
<workflow>
  <state name="Start">
		<success name="SystemInitialized" goto="PreprocessingData"/>
	</state>
  <state name="PreprocessingData" service="WorkflowOrchestratorService" operation="fake">
    <success name="Finalized" goto="InitializeData"/>
  </state>
  <state name="InitializeData" service="WorkflowOrchestratorService" operation="fake">
    <success name="Finalized" goto="DataValidation"/>
  </state>
  <state name="DataValidation" service="WorkflowOrchestratorService" operation="fake">
    <success name="Finalized" goto="ProcessData"/>
  </state>
  <state name="ProcessData" service="WorkflowOrchestratorService" operation="fake">
    <success name="Finalized" goto="TransformData"/>
  </state>
  <state name="TransformData" service="WorkflowOrchestratorService" operation="fake">
    <success name="Finalized" goto="LoadData"/>
  </state>
  <state name="LoadData" service="WorkflowOrchestratorService" operation="fake">
    <success name="Finalized" goto="FinalizeProcess"/>
  </state>
  <state name="FinalizeProcess" service="WorkflowOrchestratorService" operation="fake">
    <success name="Finalized" goto="End"/>
  </state>
  <state name="End">
	</state>
</workflow>`;
