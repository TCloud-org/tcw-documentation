import { Flex, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { AnchorButton } from "../dataEntryComponents/AnchorButton";
import { SearchButton } from "../dataEntryComponents/SearchButton";

export const AppHeader = () => {
  const { token } = theme.useToken();

  return (
    <Header
      className=" bg-white/50 h-14 fixed w-auto top-0 left-0 lg:left-80 right-0 z-10 backdrop-blur-sm items-center flex justify-between gap-4"
      style={{ borderBottom: `1px solid ${token.colorBorder}` }}
    >
      <Flex flex={1}>
        <SearchButton />
      </Flex>

      <Flex flex={1} justify="flex-end">
        <AnchorButton href="https://www.tc-workflow.com" target="_blank">
          Sign in
        </AnchorButton>
      </Flex>
    </Header>
  );
};
