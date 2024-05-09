import { Flex, Typography } from "antd";
import { HelpWord } from "../dataDisplayComponents/HelpWord";
import { NumberedListItem } from "../dataDisplayComponents/NumberedListItem";
import { ExternalLink } from "../dataEntryComponents/ExternalLink";
import { CreateWorkflowExample } from "./CreateWorkflowExample";

const steps = [
  {
    children: (
      <Typography.Paragraph>
        Go to{" "}
        <ExternalLink
          href="https://www.tc-workflow.com/workflow/add"
          target="_blank"
        >
          Add Workflow
        </ExternalLink>{" "}
        page.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Enter a workflow name (e.g., CreateAccountWorkflow,
        ProcessPaymentWorkflow, etc.).
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Choose a client that you have created in the previous step.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Enter a{" "}
        <HelpWord tooltip="Once a workflow enters the terminal state, it will remain available until the end of the retention period.">
          retention period
        </HelpWord>{" "}
        for this workflow. Our recommendation is 1 month period.
      </Typography.Paragraph>
    ),
  },
];
export const CreateWorkflowStep = () => {
  return (
    <>
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

          <CreateWorkflowExample />
        </Flex>
      </Typography.Paragraph>
    </>
  );
};
