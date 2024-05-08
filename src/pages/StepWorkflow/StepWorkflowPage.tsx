import { ExportOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { HeadingLink } from "../../dataDisplayComponents/HeadingLink";
import { DocContainer } from "../../layoutComponents/DocContainer";

const topics = [
  {
    label: "Set up a client (e.g., organization, team, etc.)",
    href: "/step-workflow/setup#set-up-a-client",
  },
  {
    label: "Create a workflow",
    href: "/",
  },
  {
    label: "Add an initial graph version of a workflow",
    href: "/",
  },
  {
    label: "Configure user API endpoint",
    href: "/",
  },
  {
    label: "Set up authentication for your API endpoint",
    href: "/",
  },
  {
    label: "Create a new retry policy",
    href: "/",
  },
];
export const StepWorkflowPage = () => {
  return (
    <DocContainer>
      <HeadingLink>Introduction</HeadingLink>
      <Typography.Text className="text-xl">
        Get started with Step Workflow and learn by exploring interactive
        tutorials.
      </Typography.Text>

      <HeadingLink level={2}>Overview</HeadingLink>
      <Typography.Paragraph>
        Step Workflow is a structured approach to building workflows within an
        application, allowing users to define a sequence of steps to be executed
        in a specific order. Each step typically represents a discrete action or
        task, such as making an API call, processing data, or triggering events.
      </Typography.Paragraph>

      <HeadingLink level={2}>Guideline</HeadingLink>
      <Typography.Paragraph>
        This guideline walks you through the first steps of using{" "}
        <Typography.Link
          href="https://www.thecloudworlds.com/products/step-workflow"
          target="_blank"
        >
          Step Workflow <ExportOutlined style={{ fontSize: "0.75rem" }} />
        </Typography.Link>
        . You will start with setting up a new client, workflow, graph, service
        endpoint, authentication, and retry policy. You will also learn how to
        integrate with our platform.
      </Typography.Paragraph>

      <Typography.Paragraph>
        The guide covers the following:
      </Typography.Paragraph>

      <Typography.Paragraph>
        <ul>
          {topics.map((topic, i) => (
            <li
              className="list-disc"
              key={i}
              style={{
                marginTop: i !== 0 ? "1rem" : undefined,
                marginBottom: "1rem",
              }}
            >
              <Typography.Link href={topic.href}>{topic.label}</Typography.Link>
            </li>
          ))}
        </ul>
      </Typography.Paragraph>
    </DocContainer>
  );
};