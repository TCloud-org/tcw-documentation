import { FacebookFilled, LinkedinFilled } from "@ant-design/icons";
import { Divider, Flex, Typography, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useLocation } from "react-router-dom";
import { docPagination } from "../config/businessConfig";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { NextButton } from "../dataEntryComponents/NextButton";
import { PreviousButton } from "../dataEntryComponents/PreviousButton";

export const AppFooter = () => {
  const { token } = theme.useToken();
  const location = useLocation();

  const { prev, next, prevLabel, nextLabel } = docPagination[
    location.pathname as keyof typeof docPagination
  ] as any;

  return (
    <Footer
      style={{ textAlign: "center", background: token.colorBgContainer }}
      className="ml-72 pb-16"
    >
      <Flex align="center" justify="space-between">
        <Flex flex={1} justify="flex-start">
          {prev && (
            <Flex vertical className="gap-3">
              <PreviousButton href={prev} />
              <a
                tabIndex={-1}
                aria-hidden="true"
                className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                href={prev}
              >
                {prevLabel}
              </a>
            </Flex>
          )}
        </Flex>
        <Flex flex={1} justify="flex-end">
          {next && (
            <Flex vertical className="gap-3" align="center">
              <NextButton href={next} />
              <a
                tabIndex={-1}
                aria-hidden="true"
                className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                href={next}
              >
                {nextLabel}
              </a>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Divider />
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={8} justify="center">
          <AppLogo />
          <Typography.Text>
            The Cloud Docs ©{new Date().getFullYear()}. All rights reserved.
          </Typography.Text>
        </Flex>

        <Flex align="center" className="gap-4">
          <a
            className="hover:text-black text-lg"
            href="https://www.facebook.com/profile.php?id=61558007322573"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookFilled />
          </a>
          <a
            className="hover:text-black text-lg"
            href="https://www.linkedin.com/company/101706949"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinFilled />
          </a>
        </Flex>
      </Flex>
    </Footer>
  );
};
