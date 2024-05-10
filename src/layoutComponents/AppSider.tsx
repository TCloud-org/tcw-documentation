import { Flex, Typography, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation } from "react-router-dom";
import { getSiderItems } from "../config/businessConfig";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { AppMenu } from "./AppMenu";

export const AppSider = () => {
  const { token } = theme.useToken();
  const location = useLocation();

  return (
    <Sider
      theme="light"
      width="18rem"
      style={{
        borderRight: `1px solid ${token.colorBorder}`,
        position: "fixed",
        height: "100%",
        overflow: "auto",
      }}
      className="px-6 pt-4 pb-8 z-10"
    >
      <Flex>
        <a href="/" className="items-center flex gap-2">
          <AppLogo />
          <Typography.Text strong>The Cloud Docs</Typography.Text>
        </a>
      </Flex>

      <nav className="hidden lg:mt-10 lg:block">
        <AppMenu items={getSiderItems(location.pathname)} />
      </nav>

      <div className="h-10" />
    </Sider>
  );
};
