import { Flex } from "antd";
import { ReactNode, useEffect } from "react";
import { scrollToHash } from "../dataDisplayComponents/HeadingLink";

export const DocContainer = (props: { children?: ReactNode }) => {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <Flex vertical className="py-14">
      {props.children}
    </Flex>
  );
};
