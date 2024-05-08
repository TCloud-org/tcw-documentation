import { Flex, Typography } from "antd";
import { ProductsSection } from "../homeComponents/ProductsSection";
import { MaskedBackground } from "../svg/ MaskedBackground";

export const HomePage = () => {
  return (
    <div>
      <MaskedBackground />
      <Flex vertical className="z-10">
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

        <ProductsSection />
      </Flex>
    </div>
  );
};
