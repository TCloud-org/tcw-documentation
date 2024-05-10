import { Flex, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation } from "react-router-dom";
import { getSiderItems } from "../config/businessConfig";
import { AppLogoText } from "../dataDisplayComponents/AppLogoText";
import { AppMenu } from "./AppMenu";

export const AppSider = () => {
  const { token } = theme.useToken();
  const location = useLocation();

  return (
    <Sider
      theme="light"
      width="20rem"
      style={{
        borderRight: `1px solid ${token.colorBorder}`,
        position: "fixed",
        height: "100%",
        overflow: "auto",
      }}
      className="hidden lg:block px-6 pt-4 pb-8 z-10"
    >
      <Flex>
        <AppLogoText />
      </Flex>

      <nav className="hidden lg:mt-10 lg:block">
        <AppMenu items={getSiderItems(location.pathname)} />
      </nav>

      <div className="h-10" />
    </Sider>
  );
};
