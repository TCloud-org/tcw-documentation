import { Divider } from "antd";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import { ApiReference } from "../../apiRefComponents/StepWorkflow/ApiReference";
import {
  GetWorksByClientIdOutputProperties,
  GetWorksByClientIdParamProperties,
  InitiateWorkflowInputProperties,
  InitiateWorkflowOutputProperties,
} from "../../config/propertyConfig";

interface ApiProps {
  key: string;
  children?: ReactNode;
}

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
            value: `curl -X POST https://wos-server-142456886.us-west-2.elb.amazonaws.com/api/private/v1/initiate-workflow 
-H "Content-Type: application/json" \\
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
        .workflowId(1L) // Insert your workflow id
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
    key: "GetWorksInDateRange",
    children: (
      <ApiReference
        method="POST"
        endpoint="/api/private/v1/get-works-in-date-range"
        name="GetWorksInDateRange"
        description="This API endpoint retrieves a list of works within a specified date range."
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
