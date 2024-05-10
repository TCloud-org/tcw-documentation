import { PropertyItemProps } from "../dataDisplayComponents/PropertyItem";

export interface ModelProps {
  name: string;
  properties: PropertyItemProps[];
}

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

export const WorkflowModel: ModelProps = {
  name: "Workflow",
  properties: [
    {
      property: "workflowId",
      type: "Long",
      description: "An unique identifier of a workflow.",
    },
    {
      property: "workflowName",
      type: "String",
      description: "The name of the workflow.",
    },
    {
      property: "clientId",
      type: "String",
      description: "The ID of the client associated with the workflow.",
    },
    {
      property: "createdAt",
      type: "String",
      description: "The date and time when the workflow was created.",
    },
    {
      property: "updatedAt",
      type: "String",
      description: "The date and time when the workflow was last updated.",
    },
    {
      property: "nextAvailableVersion",
      type: "Long",
      description: "The next available version of the workflow.",
    },
    {
      property: "metadata",
      type: "WorkflowMetadata",
      description: "Metadata associated with the workflow.",
    },
  ],
};

export const WorkflowMetadataModel: ModelProps = {
  name: "WorkflowMetadata",
  properties: [
    {
      property: "retentionPeriod",
      type: "RetentionPeriod",
      description:
        "Object representing the retention period configuration for the workflow.",
    },
  ],
};

export const RetentionPeriodModel: ModelProps = {
  name: "RetentionPeriod",
  properties: [
    {
      property: "period",
      type: "Long",
      description: "The duration of retention period in days.",
    },
    {
      property: "unit",
      type: "String",
      description: "The unit of the retention period (e.g., 'DAYS').",
    },
  ],
};

export const GetWorksInDateRangeInputProperties: PropertyItemProps[] = [
  {
    property: "clientId",
    type: "String",
    description: "The ID of the client associated with the workflow.",
    mandatory: true,
  },
  {
    property: "workflowId",
    type: "Long",
    description: "An unique identifier of the workflow.",
    mandatory: true,
  },
  {
    property: "start",
    type: "String",
    description: "The start date and time of the workflow.",
  },
  {
    property: "end",
    type: "String",
    description: "The end date and time of the workflow.",
  },
  {
    property: "period",
    type: "Period",
    description:
      "Object representing the duration or interval of the workflow.",
  },
];

export const GetWorksInDateRangeOutputProperties: PropertyItemProps[] = [
  {
    property: "works",
    type: "List of Work",
    description:
      "A list of work items in a specific date range or a period of time.",
  },
];

export const WorkModel: ModelProps = {
  name: "Work",
  properties: [
    {
      property: "workId",
      type: "String",
      description: "The unique identifier of the work item.",
    },
    {
      property: "clientId",
      type: "String",
      description: "The ID of the client associated with the work.",
    },
    {
      property: "source",
      type: "String",
      description: "The source of the work item.",
    },
    {
      property: "service",
      type: "String",
      description: "The service related to the work item.",
    },
    {
      property: "operation",
      type: "String",
      description: "The operation associated with the work item.",
    },
    {
      property: "resultType",
      type: "String",
      description: "The type of result produced by the work item.",
    },
    {
      property: "resultName",
      type: "String",
      description: "The name of the result produced by the work item.",
    },
    {
      property: "graphId",
      type: "Long",
      description: "The identifier of the graph associated with the work item.",
    },
    {
      property: "workflowId",
      type: "Long",
      description:
        "The identifier of the workflow associated with the work item.",
    },
    {
      property: "version",
      type: "Long",
      description: "The version of the work item.",
    },
    {
      property: "runningOrder",
      type: "Integer",
      description:
        "The order in which the work item is executed within the workflow.",
    },
    {
      property: "executionTime",
      type: "Long",
      description: "The execution time of the work item.",
    },
    {
      property: "createdAt",
      type: "String",
      description: "The date and time when the work item was created.",
    },
    {
      property: "updatedAt",
      type: "String",
      description: "The date and time when the work item was last updated.",
    },
    {
      property: "retryScheduleId",
      type: "String",
      description:
        "The ID of the retry schedule associated with the work item.",
    },
    {
      property: "nextRetryAt",
      type: "String",
      description:
        "The date and time of the next retry attempt for the work item.",
    },
    {
      property: "metadata",
      type: "RouteMetadata",
      description: "Metadata associated with the work item.",
    },
  ],
};
