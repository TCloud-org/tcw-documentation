import { Flex, Typography } from "antd";
import { ExternalLink } from "../dataEntryComponents/ExternalLink";
import { NumberedListItem } from "../dataDisplayComponents/NumberedListItem";
import { QuickstartExample } from "./QuickstartExample";

const steps = [
  {
    children: (
      <Typography.Paragraph>
        Go to{" "}
        <ExternalLink
          href="https://www.tc-workflow.com/auth-token/add"
          target="_blank"
        >
          Add Token
        </ExternalLink>{" "}
        page.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Enter an authentication token name (e.g.,
        WorkflowOrchestratorServiceAuth or WOSAuth).
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Select a client to whom this token belongs (e.g.,
        AccountManagementClient).
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Select a service (e.g., WorkflowOrchestratorService). Note: If no
        services appear, you need to first{" "}
        <a href="#configure-user-api-endpoint">create a service</a>.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Choose an authentication method (e.g., No Auth, Bearer).
      </Typography.Paragraph>
    ),
  },
];
export const AddAuthenticationStep = () => {
  return (
    <Typography.Paragraph>
      <Typography.Paragraph>
        In this example, since we're leveraging a service provided by our
        platform, no authentication setup is required as we are inherently
        authenticated to access our services. However, if you want to set up an
        authentication method for your API, here are the steps:
      </Typography.Paragraph>

      <Typography.Paragraph>
        {steps.map((step, i) => (
          <NumberedListItem key={i} index={i + 1}>
            {step.children}
          </NumberedListItem>
        ))}
      </Typography.Paragraph>

      <Typography.Paragraph>
        <Flex vertical gap={16}>
          <Typography.Text>Example:</Typography.Text>
          <QuickstartExample
            data={{
              Name: "WOSAuth",
              Client: "AccountManagementClient",
              "Associated service": "WorkflowOrchestratorService",
              "Authentication type": "No Auth",
            }}
          />
        </Flex>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
};
