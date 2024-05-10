import { Divider } from "antd";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import { ApiReference } from "../../apiRefComponents/StepWorkflow/ApiReference";
import {
  GetWorksByClientIdOutputProperties,
  GetWorksByClientIdParamProperties,
  GetWorksInDateRangeInputProperties,
  GetWorksInDateRangeOutputProperties,
  InitiateWorkflowInputProperties,
  InitiateWorkflowOutputProperties,
  PeriodModel,
  RetentionPeriodModel,
  WorkModel,
  WorkflowMetadataModel,
  WorkflowModel,
} from "../../config/propertyConfig";

interface ApiProps {
  key: string;
  children?: ReactNode;
}

const baseUrl =
  "https://wos-server-142456886.us-west-2.elb.amazonaws.com/api/private/v1";

const apis: ApiProps[] = [
  {
    key: "InitiateWorkflow",
    children: (
      <ApiReference
        method="POST"
        endpoint="/api/private/v1/initiate-workflow"
        name="InitiateWorkflow"
        description="This endpoint allows you to initiate a new step workflow"
        requestBody={InitiateWorkflowInputProperties}
        response={InitiateWorkflowOutputProperties}
        requestSnippets={[
          {
            key: "curl",
            label: "cURL",
            language: "bash",
            value: `curl -X POST ${baseUrl}/initiate-workflow 
-H "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\
-d '{
  "clientId": "<INSERT_YOUR_CLIENT_ID>",
  "workflowId": 123456789
}'`,
          },
          {
            key: "java",
            label: "Java",
            language: "java",
            value: `final InitiateWorkflowInput input = InitiateWorkflowInput.builder()
        .clientId("<INSERT_YOUR_CLIENT_ID>")
        .workflowId(123456789L) // Insert your workflow id
        .build();
stepWorkflowClient.initiateWorkflow(input);`,
          },
        ]}
        responseSnippets={[
          {
            key: "json",
            label: "JSON",
            language: "json",
            value: `{
  "workId": "8bfec5f6-ef46-4e02-9527-f4d9c4db6e88",
  "documentId": "b465734a-c871-47b7-b8fb-5f1a7ae7d1f2",
  "version": 1
}`,
          },
        ]}
      />
    ),
  },
  {
    key: "NotifyWorkflow",
    children: (
      <ApiReference
        method="POST"
        endpoint="/api/private/v1/notify-workflow"
        name="NotifyWorkflow"
        description="This endpoint allows you to initiate a new step workflow"
        requestBody={InitiateWorkflowInputProperties}
        requestSnippets={[
          {
            key: "curl",
            label: "cURL",
            language: "bash",
            value: `curl -X POST ${baseUrl}/notify-workflow 
-H "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\
-d '{
  "workflowId": 123456789,
  "workId": "<INSERT_YOUR_WORK_ID>",
  "stateNotification": {
    "resultType": "notified",
    "resultName": "RequestReceived",
    "document": {
      "documentBody": {
        "entities": {
          "createAccountRequest": "eyJ0ZXN0IjoidGVzdCJ9"
        }
      }
    }
  }
}'`,
          },
          {
            key: "java",
            label: "Java",
            language: "java",
            value: `final NotifyWorkflowInput input = NotifyWorkflowInput.builder()
        .workflowId(123456789L) // Insert your workflow id
        .workId("<INSERT_YOUR_WORK_ID>")
        .stateNotification(null)
        .build();
stepWorkflowClient.notifyWorkflow(input);`,
          },
        ]}
        response={[
          {
            property: "Void",
          },
        ]}
      />
    ),
  },
  {
    key: "GetWorksInDateRange",
    children: (
      <ApiReference
        method="POST"
        endpoint="/api/private/v1/get-works-in-date-range"
        name="GetWorksInDateRange"
        description="This API endpoint retrieves a list of works within a specified date range."
        requestBody={GetWorksInDateRangeInputProperties}
        response={GetWorksInDateRangeOutputProperties}
        models={[WorkModel, PeriodModel]}
        requestSnippets={[
          {
            key: "curl",
            label: "cURL",
            language: "bash",
            value: `curl -X POST "${baseUrl}/get-works-in-date-range" \\
  -H "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\
  -d '{
    "clientId": "<INSERT_YOUR_CLIENT_ID>",
    "workflowId": 123456789,
    "start": "2024-05-01T00:00:00Z",
    "end": "2024-05-10T23:59:59Z"
  }'`,
          },
        ]}
        responseSnippets={[
          {
            key: "json",
            label: "JSON",
            language: "json",
            value: `[
  {
    "workId": "work123",
    "clientId": "client456",
    "source": "source1",
    "service": "service1",
    "operation": "operation1",
    "resultType": "success",
    "resultName": "result123",
    "graphId": 789,
    "workflowId": 456,
    "version": 2,
    "runningOrder": 1,
    "executionTime": 5000,
    "createdAt": "2024-05-10T08:30:00Z",
    "updatedAt": "2024-05-10T10:45:00Z",
    "retryScheduleId": "retry123",
    "nextRetryAt": "2024-05-10T12:00:00Z",
    "metadata": {
      "document": null,
      "documentEntityChangeLog": null,
      "workRequest": null,
      "httpResponse": {
        "statusCode": 200,
        "status": "OK",
        "reasonPhrase": "Success",
        "latency": 500
      }
    }
  }
]`,
          },
        ]}
      />
    ),
  },
  {
    key: "GetWorkflowsByClientId",
    children: (
      <ApiReference
        method="GET"
        endpoint="/api/private/v1/get-workflows-by-client-id"
        name="GetWorkflowsByClientId"
        description="This API endpoint retrieves a list of workflows associated with a specific client ID."
        requestBody={GetWorksByClientIdParamProperties}
        response={GetWorksByClientIdOutputProperties}
        requestSnippets={[
          {
            key: "curl",
            label: "cURL",
            language: "bash",
            value: `curl -X GET \\
  "${baseUrl}/get-workflows-by-client-id?clientId=<YOUR_CLIENT_ID>" \\
  -H "Authorization: Bearer <YOUR_ACCESS_TOKEN>"`,
          },
        ]}
        responseSnippets={[
          {
            key: "json",
            label: "JSON",
            language: "json",
            value: `[
  {
    "workflowId": 123456789,
    "workflowName": "SampleWorkflow",
    "clientId": "client123",
    "createdAt": "${new Date().toISOString()}",
    "updatedAt": "${new Date().toISOString()}",
    "nextAvailableVersion": 2,
    "metadata": {
      "retentionPeriod": {
        "period": 30,
        "unit": "DAYS"
      }
    }
  }
]`,
          },
        ]}
        models={[WorkflowModel, WorkflowMetadataModel, RetentionPeriodModel]}
      />
    ),
  },
];

export const StepWorkflowApiReferenceApiPage = () => {
  const apiComparator = (a: any, b: any) => {
    return a.key.localeCompare(b.key);
  };

  return (
    <>
      {apis.sort(apiComparator).map((api, i) => (
        <Fragment key={i}>
          {i !== 0 && <Divider />}
          {api.children}
        </Fragment>
      ))}
    </>
  );
};
