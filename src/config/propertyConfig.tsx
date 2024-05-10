import { PropertyItemProps } from "../dataDisplayComponents/PropertyItem";

export const InitiateWorkflowInputProperties: PropertyItemProps[] = [
  {
    property: "clientId",
    type: "String",
    description: "An unique identifier of a client.",
    mandatory: true,
  },
  {
    property: "workflowId",
    type: "Long",
    description: "An unique identifier of a workflow.",
    mandatory: true,
  },
  {
    property: "workId",
    type: "String",
    description:
      "An unique identifier is assigned to each work initiated. Each time we initiate a workflow, it is referred to as a work.",
  },
  {
    property: "document",
    type: "Document",
    description:
      "This document serves as the initial input for the workflow and will be utilized throughout the entire workflow process. It provides the foundational data upon which subsequent actions and decisions are based.",
  },
  {
    property: "configuration",
    type: "WorkflowConfiguration",
    description:
      "This enables you to configure which version of a graph or service endpoint to execute for a particular state or the entire workflow.",
  },
];

export const InitiateWorkflowOutputProperties: PropertyItemProps[] = [
  {
    property: "workId",
    type: "String",
    description: "An unique identifier is assigned to each task initiated.",
  },
  {
    property: "documentId",
    type: "String",
    description: "An unique identifier of a document.",
  },
  {
    property: "version",
    type: "Long",
    description: "A version of the current task.",
  },
];

export const GetWorksByClientIdParamProperties: PropertyItemProps[] = [
  {
    property: "clientId",
    type: "String",
    description: "An unique identifier of a client.",
    mandatory: true,
  },
];

export const GetWorksByClientIdOutputProperties: PropertyItemProps[] = [
  {
    property: "workflows",
    type: "List of Workflow",
    description: "A list of workflows.",
  },
];
