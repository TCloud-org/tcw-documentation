import { Flex, Typography } from "antd";
import { HeadingLink } from "../../dataDisplayComponents/HeadingLink";
import { DocContainer } from "../../layoutComponents/DocContainer";
import { NumberedListItem } from "../../dataDisplayComponents/NumberedListItem";

const steps = [
  {
    children: (
      <Typography.Paragraph>
        Go to{" "}
        <a
          href="https://www.tc-workflow.com/client/add"
          target="_blank"
          rel="noreferrer"
        >
          Add Client
        </a>{" "}
        page.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Enter a client name. This will serve as your client identifier. You can
        consider this field as your team name, organization name, or a name
        indicating the scope of your workflows.
        <Typography.Paragraph>
          <ul>
            <li className="list-disc">
              For example, let's consider the client AccountManagementClient.
              Within this client scope, various workflows are managed, such as
              the SeedAccountWorkflow, CloseAccountWorkflow, and
              VerifyAccountWorkflow. Each of these workflows serves specific
              purposes within the realm of account management. For instance, the
              SeedAccountWorkflow handles the initial setup of accounts, while
              the CloseAccountWorkflow manages the account closure process.
            </li>
          </ul>
        </Typography.Paragraph>
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        (Optional) You can invite people to manage all the resources, including
        workflows, that belong to this client.
      </Typography.Paragraph>
    ),
  },
];
export const StepWorkflowSetupPage = () => {
  return (
    <DocContainer>
      <HeadingLink>Setup</HeadingLink>

      <Typography.Paragraph>
        This guide will get you set up with your first client. We will get
        started on how to create a new client in the TCW console.
      </Typography.Paragraph>

      <HeadingLink level={2}>Set up a client</HeadingLink>

      <Typography.Paragraph>
        To set up a client from one of your TCW accounts:
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Flex vertical gap={4}>
          {steps.map((step, i) => (
            <NumberedListItem index={i + 1} key={i}>
              {step.children}
            </NumberedListItem>
          ))}
        </Flex>
      </Typography.Paragraph>
    </DocContainer>
  );
};
