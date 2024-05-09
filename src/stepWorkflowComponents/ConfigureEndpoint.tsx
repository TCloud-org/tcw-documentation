import { Flex, Typography } from "antd";
import { NumberedListItem } from "../dataDisplayComponents/NumberedListItem";
import { ExternalLink } from "../dataEntryComponents/ExternalLink";
import { ConfigureEndpointExample } from "./ConfigureEndpointExample";

const steps = [
  {
    children: (
      <Typography.Paragraph>
        Go to{" "}
        <ExternalLink href="https://www.tc-workflow.com/service/add">
          Add Service
        </ExternalLink>{" "}
        page.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Enter your service name (e.g., WorkflowOrchestratorService). This is
        utilized to link the service specified in the workflow to your API
        endpoint.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Enter your service endpoint (e.g., https://api.example.com/v1)
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Select your environment either Production or Development.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Enter an alias. Enter 'live' if you intend to use the current version.
      </Typography.Paragraph>
    ),
  },
];

export const ConfigureEndpoint = () => {
  return (
    <Typography.Paragraph>
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

          <ConfigureEndpointExample />
        </Flex>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
};
