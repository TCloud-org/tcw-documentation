import { Flex } from "antd";
import { ReactNode, useEffect } from "react";
import { scrollToHash } from "../dataDisplayComponents/HeadingLink";

export const DocContainer = (props: { children?: ReactNode; gap?: number }) => {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <Flex
      vertical
      className="p-mag py-14 flex-auto prose dark:prose-invert [html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-4xl"
      gap={props.gap}
    >
      {props.children}
    </Flex>
  );
};
