import { useState, useEffect, Fragment } from "react";
import { Col, Collapse, Flex, Row, Typography } from "antd";
import { createSpan } from "../../config/layoutConfig";
import {
  ApiMethodHeading,
  HttpMethod,
} from "../../dataDisplayComponents/ApiMethodHeading";
import { HeadingLink } from "../../dataDisplayComponents/HeadingLink";
import { PropertyItemProps } from "../../dataDisplayComponents/PropertyItem";
import { PropertyList } from "../../dataDisplayComponents/PropertyList";
import { CodeBeam, Snippet } from "../../dataEntryComponents/CodeBeam";
import { DocContainer } from "../../layoutComponents/DocContainer";
import { ModelProps } from "../../config/propertyConfig";

export const ApiReference = (props: {
  method: HttpMethod;
  endpoint: string;
  name: string;
  description?: string;
  requestBody?: PropertyItemProps[];
  response?: PropertyItemProps[];
  requestSnippets?: Snippet[];
  responseSnippets?: Snippet[];
  models?: ModelProps[];
}) => {
  const { models = [] } = props;

  const [requestCode, setRequestCode] = useState<string>("curl");
  const [responseCode, setResponseCode] = useState<string>("json");

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const triggerOffset = 100;

    setIsSticky(offset > triggerOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isParam = props.method === "DELETE" || props.method === "GET";

  return (
    <DocContainer>
      <Flex vertical gap={16}>
        <ApiMethodHeading method={props.method} endpoint={props.endpoint} />

        <HeadingLink level={4} style={{ margin: 0 }}>
          {props.name}
        </HeadingLink>

        <Row gutter={[32, 32]}>
          <Col {...createSpan(12)}>
            <Flex vertical gap={16}>
              <Typography.Paragraph>{props.description}</Typography.Paragraph>

              {props.requestBody && (
                <>
                  <Typography.Text strong>
                    {isParam ? "Parameter" : "Request Body"}
                  </Typography.Text>
                  <PropertyList items={props.requestBody} />
                </>
              )}

              {props.response && (
                <>
                  <Typography.Text strong>Response</Typography.Text>
                  <PropertyList items={props.response} />
                </>
              )}

              {models.map((model, i) => (
                <Collapse
                  key={i}
                  expandIconPosition="right"
                  items={[
                    {
                      key: i,
                      label: (
                        <Typography.Text strong>{model.name}</Typography.Text>
                      ),
                      children: <PropertyList items={model.properties} />,
                    },
                  ]}
                />
              ))}
            </Flex>
          </Col>
          <Col {...createSpan(12)}>
            <Flex
              vertical
              gap={16}
              style={{
                position: isSticky ? "sticky" : "static",
                top: "100px",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CodeBeam
                snippets={props.requestSnippets}
                value={requestCode}
                label="Request"
                onChange={setRequestCode}
              />

              <CodeBeam
                snippets={props.responseSnippets}
                value={responseCode}
                label="Response"
                onChange={setResponseCode}
              />
            </Flex>
          </Col>
        </Row>
      </Flex>
    </DocContainer>
  );
};
