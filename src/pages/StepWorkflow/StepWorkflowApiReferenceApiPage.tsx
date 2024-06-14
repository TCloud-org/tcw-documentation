import { Divider } from "antd";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import { ApiReference } from "../../apiRefComponents/StepWorkflow/ApiReference";
import {
  DocumentBodyModel,
  DocumentEntityChangeLogModel,
  DocumentModel,
  GetWorksByClientIdOutputProperties,
  GetWorksByClientIdParamProperties,
  GetWorksInDateRangeInputProperties,
  GetWorksInDateRangeOutputProperties,
  InitiateWorkflowInputProperties,
  InitiateWorkflowOutputProperties,
  NotifyWorkflowInputProperties,
  PeriodModel,
  RetentionPeriodModel,
  StateNotificationModel,
  WorkModel,
  WorkflowMetadataModel,
  WorkflowModel,
} from "../../config/propertyConfig";

interface ApiProps {
  key: string;
  children?: ReactNode;
}

const baseUrl = "https://wos.be.thecloudworlds.com:8080/api/private/v1";

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
  "workflowId": "<INSERT_YOUR_WORKFLOW_ID>"
}'`,
          },
          {
            key: "java",
            label: "Java",
            language: "java",
            value: `final InitiateWorkflowInput input = InitiateWorkflowInput.builder()
        .clientId("<INSERT_YOUR_CLIENT_ID>")
        .workflowId("<INSERT_YOUR_WORKFLOW_ID>")
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
        requestBody={NotifyWorkflowInputProperties}
        models={[
          DocumentModel,
          DocumentEntityChangeLogModel,
          DocumentBodyModel,
          StateNotificationModel,
        ]}
        requestSnippets={[
          {
            key: "curl",
            label: "cURL",
            language: "bash",
            value: `curl -X POST ${baseUrl}/notify-workflow 
-H "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\
-d '{
  "workflowId": "<INSERT_YOUR_WORKFLOW_ID>",
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
            value: `final Document document = Document.create();
final ObjectMapper objectMapper = new ObjectMapper();
document.putEntity("YOUR_OBJECT_KEY", objectMapper.writeValueAsBytes("YOUR_OBJECT"));
final StateNotification notification = StateNotification.builder()
        .resultType(ActionType.NOTIFIED.getValue())
        .resultName("RequestReceived")
        .document(document)
        .build();
final NotifyWorkflowInput input = NotifyWorkflowInput.builder()
        .workflowId("<INSERT_YOUR_WORKFLOW_ID>")
        .workId("<INSERT_YOUR_WORK_ID>")
        .stateNotification(notification)
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
    "workflowId": "<INSERT_YOUR_WORKFLOW_ID>",
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
    "workId": "work::ClientA:WorkflowB/b8f62f36-70b4-47d5-8428-8a5414e7abf2",
    "clientId": "client456",
    "source": "source1",
    "service": "service1",
    "operation": "operation1",
    "resultType": "success",
    "resultName": "result123",
    "graphId": "graph::ClientA:WorkflowB/1",
    "workflowId": "workflow::ClientA/WorkflowB",
    "version": 2,
    "runningOrder": 1,
    "executionTime": 5000,
    "createdAt": "2024-05-10T08:30:00Z",
    "updatedAt": "2024-05-10T10:45:00Z",
    "retryScheduleId": "d2a8b130-4e0f-4a7f-8d16-5b4d37f7c6e1",
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
    "workflowId": "workflow::SampleClient/SampleWorkflow",
    "workflowName": "SampleWorkflow",
    "clientId": "SampleClient",
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
