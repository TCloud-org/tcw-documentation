import { Divider, Flex, Typography, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { NextButton } from "../dataEntryComponents/NextButton";
import { PreviousButton } from "../dataEntryComponents/PreviousButton";
import { useLocation } from "react-router-dom";
import { docPagination } from "../config/businessConfig";

export const AppFooter = () => {
  const { token } = theme.useToken();
  const location = useLocation();

  const { prev, next, prevLabel, nextLabel } = docPagination[
    location.pathname as keyof typeof docPagination
  ] as any;

  return (
    <Footer
      style={{ textAlign: "center", background: token.colorBgContainer }}
      className="ml-72"
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
      <Flex align="center" gap={8} justify="center">
        <AppLogo />
        <Typography.Text strong>
          The Cloud Docs ©{new Date().getFullYear()}
        </Typography.Text>
      </Flex>
    </Footer>
  );
};
