import { Col, Flex, Row, Typography } from "antd";
import { ApiMethodHeading } from "../../dataDisplayComponents/ApiMethodHeading";
import { HeadingLink } from "../../dataDisplayComponents/HeadingLink";
import { PropertyList } from "../../dataDisplayComponents/PropertyList";
import { DocContainer } from "../../layoutComponents/DocContainer";
import {
  InitiateWorkflowInputProperties,
  InitiateWorkflowOutputProperties,
} from "../../config/propertyConfig";
import { createSpan } from "../../config/layoutConfig";
import { CodeBeam } from "../../dataEntryComponents/CodeBeam";
import { useState } from "react";

export const StepWorkflowInitiateWorkflow = () => {
  const [requestCode, setRequestCode] = useState<string>("curl");
  const [responseCode, setResponseCode] = useState<string>("json");

  return (
    <DocContainer>
      <Flex vertical gap={16}>
        <ApiMethodHeading
          method="POST"
          endpoint="/api/private/v1/initiate-workflow"
        />

        <HeadingLink level={4} style={{ margin: 0 }}>
          InitiateWorkflow
        </HeadingLink>

        <Row gutter={[32, 32]}>
          <Col {...createSpan(12)}>
            <Flex vertical gap={16}>
              <Typography.Paragraph>
                This endpoint allows you to initiate a new step workflow
              </Typography.Paragraph>

              <Typography.Text strong>Request Body</Typography.Text>

              <PropertyList items={InitiateWorkflowInputProperties} />

              <Typography.Text strong>Response</Typography.Text>

              <PropertyList items={InitiateWorkflowOutputProperties} />
            </Flex>
          </Col>
          <Col {...createSpan(12)}>
            <Flex vertical gap={16}>
              <CodeBeam
                snippets={[
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
                    value: "java",
                  },
                ]}
                value={requestCode}
                label="Request"
                onChange={setRequestCode}
              />

              <CodeBeam
                snippets={[
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
                value={responseCode}
                label="Response"
                onChange={setResponseCode}
              />
            </Flex>
          </Col>
        </Row>
      </Flex>
    </DocContainer>
  );
};
