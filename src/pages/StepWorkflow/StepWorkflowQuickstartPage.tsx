import { Flex, Typography } from "antd";
import { HeadingLink } from "../../dataDisplayComponents/HeadingLink";
import { NumberedListItem } from "../../dataDisplayComponents/NumberedListItem";
import { ExternalLink } from "../../dataEntryComponents/ExternalLink";
import { DocContainer } from "../../layoutComponents/DocContainer";
import { AddAuthenticationStep } from "../../stepWorkflowComponents/AddAuthenticationStep";
import { AddGraphStep } from "../../stepWorkflowComponents/AddGraphStep";
import { ConfigureEndpoint } from "../../stepWorkflowComponents/ConfigureEndpoint";
import { CreatePolicyStep } from "../../stepWorkflowComponents/CreatePolicyStep";
import { CreateWorkflowStep } from "../../stepWorkflowComponents/CreateWorkflowStep";
import { QuickstartExample } from "../../stepWorkflowComponents/QuickstartExample";
import { QuickstartNext } from "../../stepWorkflowComponents/QuickstartNext";
import { InitiateWorkflowStep } from "../../stepWorkflowComponents/InitiateWorkflowStep";

const steps = [
  {
    children: (
      <Typography.Paragraph>
        Go to{" "}
        <ExternalLink
          href="https://www.tc-workflow.com/client/add"
          target="_blank"
        >
          Add Client
        </ExternalLink>{" "}
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

export const StepWorkflowQuickstartPage = () => {
  return (
    <DocContainer>
      <HeadingLink level={2}>Quickstart</HeadingLink>

      <Typography.Paragraph className="text-base">
        This guide will get you all set up and ready to use the Step Workflow
        API. We'll cover how to get all the infrastructures set up and how to
        make your first API request. We'll also look at where to go next to find
        all the information you need to take full advantage of our powerful REST
        API.
      </Typography.Paragraph>

      <HeadingLink level={3}>Set up a client</HeadingLink>

      <Typography.Paragraph>
        <Typography.Paragraph>
          To set up a client from one of your TCW accounts:
        </Typography.Paragraph>

        <Flex vertical gap={4}>
          {steps.map((step, i) => (
            <NumberedListItem index={i + 1} key={i}>
              {step.children}
            </NumberedListItem>
          ))}
        </Flex>
      </Typography.Paragraph>

      <Typography.Paragraph>
        <Flex vertical gap={16}>
          <Typography.Text>Example: </Typography.Text>
          <QuickstartExample
            data={{
              Client: "AccountManagementClient",
            }}
          />
        </Flex>
      </Typography.Paragraph>

      <HeadingLink level={3}>Create a workflow</HeadingLink>

      <CreateWorkflowStep />

      <HeadingLink level={3}>Add a graph</HeadingLink>

      <AddGraphStep />

      <HeadingLink level={3}>Configure user API endpoint</HeadingLink>

      <ConfigureEndpoint />

      <HeadingLink level={3}>Set up API authentication</HeadingLink>

      <AddAuthenticationStep />

      <HeadingLink level={3}>Add a retry policy</HeadingLink>

      <CreatePolicyStep />

      <HeadingLink level={3}>Initiate a workflow</HeadingLink>

      <InitiateWorkflowStep />

      <HeadingLink level={3}>What's next?</HeadingLink>

      <QuickstartNext />
    </DocContainer>
  );
};
