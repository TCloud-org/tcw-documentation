import { Flex, Typography } from "antd";
import { ExternalLink } from "../dataEntryComponents/ExternalLink";
import { NumberedListItem } from "../dataDisplayComponents/NumberedListItem";
import { QuickstartExample } from "./QuickstartExample";

const steps = [
  {
    children: (
      <Typography.Paragraph>
        Go to{" "}
        <ExternalLink href="https://www.tc-workflow.com/retry-policy/add">
          Add Retry Policy
        </ExternalLink>{" "}
        page.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Choose a retry policy based on your requirements (e.g., Fixed Retry,
        Exponential Backoff, etc.).
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Fill in all applicable numbers for your retry strategy. Note: as of
        today, the unit for all these values are in minutes.
      </Typography.Paragraph>
    ),
  },
];
export const CreatePolicyStep = () => {
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

          <QuickstartExample
            data={{
              Policy: "Fixed Retry",
              Name: "CreateAccountWorkflowFixedRetry",
              "Number of retries": 20,
              Delay: 10,
            }}
          />
        </Flex>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
};
