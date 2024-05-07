import { AutoComplete, Col, Flex, Row, Typography } from "antd";
import { AppCard } from "../dataEntryComponents/AppCard";

import { FiAperture, FiSend } from "react-icons/fi";
import { Span } from "../config/layoutConfig";
import { AppCardProps } from "../dataEntryComponents/AppCard";
import { useState } from "react";
import { SimpleCard } from "../dataEntryComponents/SimpleCard";

const products: AppCardProps[] = [
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

export const ProductsSection = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <Flex vertical gap={32}>
      <Typography.Title level={4} style={{ margin: 0 }}>
        All Products
      </Typography.Title>
      <AutoComplete
        onSelect={setQuery}
        placeholder="Search all products"
        options={products.map((product) => ({
          value: product.title,
        }))}
        allowClear
        filterOption={(inputValue, option) =>
          option!.value?.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        }
        onClear={() => setQuery("")}
      />
      <Flex>
        <Row gutter={[32, 32]} style={{ width: "100%" }}>
          {products
            .filter((product) =>
              product.title?.toLowerCase().includes(query.toLowerCase())
            )
            .map((product, i) => (
              <Col
                {...Span[3]}
                key={i}
                style={{
                  display: "flex",
                  height: "100%",
                }}
              >
                <SimpleCard {...product} />
              </Col>
            ))}
        </Row>
      </Flex>
    </Flex>
  );
};