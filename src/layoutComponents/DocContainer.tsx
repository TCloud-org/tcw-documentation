import { Divider, Flex } from "antd";
import { ReactNode, useEffect } from "react";
import { scrollToHash } from "../dataDisplayComponents/HeadingLink";

export const DocContainer = (props: {
  children?: ReactNode;
  gap?: number;
  showDivider?: boolean;
}) => {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <>
      <Flex
        vertical
        className="px-4 sm:px-6 lg:px-8 py-14 flex-auto prose dark:prose-invert [html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-4xl"
        gap={props.gap}
      >
        {props.children}
      </Flex>

      {props.showDivider && <Divider className="" style={{ width: "100vw" }} />}
    </>
  );
};
