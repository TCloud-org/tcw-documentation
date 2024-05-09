import { Typography } from "antd";
import { stepWorkflowGradle, stepWorkflowMaven } from "../config/codeConfig";
import { HeadingLink } from "../dataDisplayComponents/HeadingLink";
import { CodeBeam } from "../dataEntryComponents/CodeBeam";
import { useState } from "react";
import { ExternalLink } from "../dataEntryComponents/ExternalLink";
import { NumberedListItem } from "../dataDisplayComponents/NumberedListItem";

const installationInstruction = {
  maven: "Add the following dependency to your application pom.xml file",
  gradle: "Add the following dependency to your application build.gradle file",
};
export const InitiateWorkflowStep = () => {
  const [installType, setInstallType] = useState<string>("maven");

  return (
    <Typography.Paragraph>
      <HeadingLink level={4}>Install the Step Workflow library</HeadingLink>

      <Typography.Paragraph>
        Before making your first API request, you need to pick which API client
        you will use. In addition to good ol' cURL HTTP requests, TCW offers
        clients for Java. In the following example, you can see how to install
        each client.
      </Typography.Paragraph>
      <Typography.Paragraph>
        {
          installationInstruction[
            installType as keyof typeof installationInstruction
          ]
        }
      </Typography.Paragraph>

      <CodeBeam
        value="maven"
        snippets={[
          {
            key: "maven",
            label: "Maven",
            language: "xml",
            value: stepWorkflowMaven,
          },
          {
            key: "gradle",
            label: "Gradle",
            language: "gradle",
            value: stepWorkflowGradle,
          },
        ]}
        onChange={setInstallType}
      />

      <HeadingLink level={4}>Initialize the client</HeadingLink>

      <Typography.Paragraph>
        To facilitate this integration, you will need to initialize the Step
        Workflow client in your codebase. This client will serve as an interface
        for communicating with the Workflow service.
      </Typography.Paragraph>

      <Typography.Paragraph>
        <NumberedListItem index={1}>
          <Typography.Paragraph>Import the client</Typography.Paragraph>
        </NumberedListItem>
        <CodeBeam
          value="java"
          snippets={[
            {
              key: "java",
              label: "Java",
              language: "java",
              value: `import org.tcloud.client.StepWorkflowClient;`,
            },
          ]}
        />
      </Typography.Paragraph>

      <Typography.Paragraph>
        <NumberedListItem index={2}>
          <Typography.Paragraph>Initialize the client</Typography.Paragraph>
        </NumberedListItem>
        <CodeBeam
          value="java"
          snippets={[
            {
              key: "java",
              label: "Java",
              language: "java",
              value: `final StepWorkflowClient client = StepWorkflowClient.create();`,
            },
          ]}
        />
      </Typography.Paragraph>

      <HeadingLink level={4}>Make your first API request</HeadingLink>

      <Typography.Paragraph>
        Let's make your first API request to open a workflow. Replace the{" "}
        <code>workflowId</code> with the identifier retrieved after creating a
        workflow.
      </Typography.Paragraph>
      <Typography.Paragraph>
        <CodeBeam
          value="java"
          snippets={[
            {
              key: "java",
              label: "Java",
              language: "java",
              value: `final InitiateWorkflowInput input = InitiateWorkflowInput.builder()
        .clientId("AccountManagementClient")
        .workflowId(1L)
        .build();
client.initiateWorkflow(input);`,
            },
          ]}
        />
      </Typography.Paragraph>
      <Typography.Paragraph>
        After the request is sent, you will be able to see a new workflow
        appeared in the{" "}
        <ExternalLink href="https://www.tc-workflow.com/live" target="_blank">
          live
        </ExternalLink>{" "}
        page
      </Typography.Paragraph>
    </Typography.Paragraph>
  );
};
