import { Col, Flex, Row, Typography } from "antd";
import { FiAperture, FiSend } from "react-icons/fi";
import { AppCard, AppCardProps } from "../dataEntryComponents/AppCard";
import { Container } from "../layoutComponents/Container";
import { MaskedBackground } from "../svg/ MaskedBackground";
import { Span } from "../config/layoutConfig";

const applications: AppCardProps[] = [
  {
    title: "Step Workflow",
    subtitle: "Create and run loads of asynchronous tasks",
    href: "/step-workflow",
    Icon: FiAperture,
  },
  {
    title: "Email Notification Workflow",
    subtitle: "Set up, streamline, and execute email automation",
    href: "/email-notification-workflow",
    Icon: FiSend,
  },
];
export const HomePage = () => {
  return (
    <Container>
      <MaskedBackground />
      <Flex vertical gap={64}>
        <Flex vertical className="py-16">
          <Typography.Title level={2}>
            Welcome to The Cloud Docs
          </Typography.Title>
          <Typography.Paragraph className="text-base">
            Explore our comprehensive API reference documentation and
            quickstarts. From SDKs tailored to your preferred programming
            languages to sample applications for web development, we've got you
            covered.
          </Typography.Paragraph>
        </Flex>

        <Flex>
          <Row
            gutter={[32, 32]}
            className="justify-center items-center"
            style={{ width: "100%" }}
          >
            {applications.map((application, i) => (
              <Col
                {...Span[3]}
                key={i}
                style={{
                  display: "flex",
                  height: "100%",
                }}
              >
                <AppCard {...application} style={{ flex: 1 }} />
              </Col>
            ))}
          </Row>
        </Flex>
      </Flex>
    </Container>
  );
};
