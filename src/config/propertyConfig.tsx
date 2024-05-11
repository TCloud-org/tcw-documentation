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
    type: "List<Workflow>",
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
      description: "The duration of retention period.",
    },
    {
      property: "unit",
      type: "String",
      description:
        "The unit of the retention period (e.g., DAYS, WEEKS, MONTHS, YEARS).",
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
    type: "List<Work>",
    description:
      "A list of work items in a specific date range or a period of time.",
  },
];

export const NotifyWorkflowInputProperties: PropertyItemProps[] = [
  {
    property: "clientId",
    type: "string",
    description: "The identifier of the client associated with the workflow.",
  },
  {
    property: "workflowId",
    type: "number",
    description: "The unique identifier of the workflow.",
  },
  {
    property: "workId",
    type: "string",
    description: "The identifier of the work associated with the workflow.",
  },
  {
    property: "stateNotification",
    type: "StateNotification",
    description: "Object representing the state notification details.",
  },
];

export const StateNotificationModel: ModelProps = {
  name: "StateNotification",
  properties: [
    {
      property: "resultType",
      type: "string",
      description: "The type of result associated with the notification.",
    },
    {
      property: "resultName",
      type: "string",
      description: "The name of the result associated with the notification.",
    },
    {
      property: "document",
      type: "Document",
      description: "Object representing the associated document.",
    },
    {
      property: "notifiedAt",
      type: "ZonedDateTime",
      description: "The timestamp when the notification was sent.",
    },
  ],
};

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

export const PeriodModel: ModelProps = {
  name: "Period",
  properties: [
    {
      property: "TODAY",
      description: "Represents the current day.",
    },
    {
      property: "YESTERDAY",
      description: "Represents the previous day.",
    },
    {
      property: "LAST_WEEK",
      description: "Represents the previous week.",
    },
    {
      property: "LAST_MONTH",
      description: "Represents the previous month.",
    },
  ],
};

export const DocumentModel: ModelProps = {
  name: "Document",
  properties: [
    {
      property: "documentId",
      type: "String",
      description: "The identifier of the document.",
    },
    {
      property: "documentBody",
      type: "DocumentBody",
      description: "The body content of the document.",
    },
  ],
};

export const DocumentBodyModel: ModelProps = {
  name: "DocumentBody",
  properties: [
    {
      property: "entities",
      type: "Map<String, byte[]>",
      description: "Map of entity names to byte arrays.",
    },
    {
      property: "changeLogs",
      type: "List<DocumentEntityChangeLog>",
      description: "List of change logs for the document.",
    },
  ],
};

export const DocumentEntityChangeLogModel: ModelProps = {
  name: "DocumentEntityChangeLog",
  properties: [
    {
      property: "added",
      type: "Map<String, byte[]>",
      description: "Map of added entities with their byte arrays.",
    },
    {
      property: "removed",
      type: "Map<String, byte[]>",
      description: "Map of removed entities with their byte arrays.",
    },
    {
      property: "modified",
      type: "Map<String, byte[]>",
      description: "Map of modified entities with their byte arrays.",
    },
    {
      property: "createdAt",
      type: "String",
      description: "The timestamp when the change log was created.",
    },
  ],
};

export const WorkflowConfigurationModel: ModelProps = {
  name: "WorkflowConfiguration",
  properties: [
    {
      property: "workflowConfigurationId",
      type: "String",
      description: "The identifier of the workflow configuration.",
    },
    {
      property: "workId",
      type: "String",
      description:
        "The identifier of the work associated with the configuration.",
    },
    {
      property: "clientId",
      type: "String",
      description:
        "The identifier of the client associated with the configuration.",
    },
    {
      property: "workflowVersionConfig",
      type: "Configuration",
      description: "The configuration for the workflow version.",
    },
    {
      property: "stateEndpointConfigMap",
      type: "Map<String, Configuration>",
      description: "Map of state names to their endpoint configurations.",
    },
    {
      property: "serviceEndpointConfigMap",
      type: "Map<String, Configuration>",
      description: "Map of service names to their endpoint configurations.",
    },
    {
      property: "workflowRetryConfig",
      type: "RetryConfig",
      description: "Retry configuration for the workflow.",
    },
    {
      property: "stateRetryConfigMap",
      type: "Map<String, RetryConfig>",
      description: "Map of state names to their retry configurations.",
    },
    {
      property: "modifiedAt",
      type: "String",
      description: "The timestamp when the configuration was last modified.",
    },
    {
      property: "version",
      type: "Long",
      description: "The version of the workflow configuration.",
    },
  ],
};

export const ConfigurationModel: ModelProps = {
  name: "Configuration",
  properties: [
    {
      property: "name",
      type: "String",
      description: "The name of the configuration.",
    },
    {
      property: "alias",
      type: "String",
      description: "The alias of the configuration.",
    },
  ],
};

export const RetryConfigModel: ModelProps = {
  name: "RetryConfig",
  properties: [
    {
      property: "retryPolicyId",
      type: "Long",
      description: "The identifier of the retry policy.",
    },
    {
      property: "retryIndex",
      type: "Integer",
      description: "The index of the retry.",
    },
  ],
};
