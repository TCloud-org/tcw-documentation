import { Flex } from "antd";
import { ReactNode } from "react";

export const DocContainer = (props: { children?: ReactNode }) => {
  return (
    <Flex vertical className="py-14">
      {props.children}
    </Flex>
  );
};
