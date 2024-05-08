import { Flex, Typography } from "antd";
import { ReactNode } from "react";

export const NumberedListItem = (props: {
  children?: ReactNode;
  index?: number;
}) => {
  const { index = 0 } = props;
  return (
    <Flex align="flex-start" gap={16}>
      <div className="h-6 w-6 bg-slate-100 justify-center items-center flex rounded-full">
        <Typography.Text className="text-xs">{index}</Typography.Text>
      </div>
      <div style={{ marginTop: 1, flex: 1 }}>{props.children}</div>
    </Flex>
  );
};
