import { Flex, Form, Typography } from "antd";
import { graphXml } from "../config/businessConfig";
import { HelpWord } from "../dataDisplayComponents/HelpWord";
import { NumberedListItem } from "../dataDisplayComponents/NumberedListItem";
import { CodeBeam, textColor } from "../dataEntryComponents/CodeBeam";
import { ExternalLink } from "../dataEntryComponents/ExternalLink";
import { QuickstartExample } from "./QuickstartExample";

const steps = [
  {
    children: (
      <Typography.Paragraph>
        Go to{" "}
        <ExternalLink
          href="https://www.tc-workflow.com/graph/create"
          target="_blank"
        >
          Add Graph
        </ExternalLink>{" "}
        page.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Select a client (e.g., AccountManagementClient)
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Select a workflow (e.g., CreateAccountWorkflow)
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Enter an{" "}
        <HelpWord tooltip="An alias is a human-readable reference to a specific version of an object (e.g., graph, workflow, service endpoint, etc.)">
          alias
        </HelpWord>{" "}
        (e.g., live). If this field is left empty, a unique identifier will be
        assigned.
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        (Optional) Enter a description. Although description is optional,
        providing a description can enhance comprehension by offering insight
        into the rationale behind creating this graph (e.g., adding a
        verification state before seeding an account).
      </Typography.Paragraph>
    ),
  },
  {
    children: (
      <Typography.Paragraph>
        Compose your workflow graph in XML format.
      </Typography.Paragraph>
    ),
  },
];

export const AddGraphStep = () => {
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
              Client: "AccountManagementClient",
              Workflow: "CreateAccountWorkflow",
              Alias: "live",
              Description:
                "Adding a verification state before seeding an account",
              Version: 1,
            }}
          >
            <Form.Item
              label={
                <Typography.Text style={{ color: textColor }}>
                  Graph
                </Typography.Text>
              }
            >
              <CodeBeam
                borderColor={"transparent"}
                style={{ borderRadius: "0.375rem" }}
                value="xml"
                hideToolbar
                snippets={[
                  {
                    key: "xml",
                    label: "Graph",
                    language: "xml",
                    value: graphXml,
                  },
                ]}
              />
            </Form.Item>
          </QuickstartExample>
        </Flex>
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
};
