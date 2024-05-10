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
        className="px-4 sm:px-6 lg:px-8 py-14 flex-auto"
        gap={props.gap}
      >
        {props.children}
      </Flex>

      {props.showDivider && <Divider className="" style={{ width: "100vw" }} />}
    </>
  );
};
