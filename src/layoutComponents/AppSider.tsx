import { Flex, Typography, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { AppLogo } from "../dataDisplayComponents/AppLogo";
import { AppMenu, MenuItem } from "./AppMenu";

const menu: MenuItem[] = [
  {
    title: "Guides",
    children: [
      {
        href: "/",
        title: "Introduction",
        children: [
          {
            href: "/",
            title: "Guides",
          },
          {
            href: "/",
            title: "Resources",
          },
        ],
      },
      {
        href: "/",
        title: "Introduction",
        children: [
          {
            href: "/",
            title: "Guides",
          },
          {
            href: "/",
            title: "Resources",
          },
        ],
      },
    ],
  },
  {
    title: "Guides",
    children: [
      {
        href: "/",
        title: "Introduction",
        children: [
          {
            href: "/",
            title: "Guides",
          },
          {
            href: "/",
            title: "Resources",
          },
        ],
      },
      {
        href: "/",
        title: "Introduction",
        children: [
          {
            href: "/",
            title: "Guides",
          },
          {
            href: "/",
            title: "Resources",
          },
        ],
      },
    ],
  },
];
export const AppSider = () => {
  const { token } = theme.useToken();

  return (
    <Sider
      theme="light"
      width="18rem"
      style={{
        borderRight: `1px solid ${token.colorBorder}`,
        position: "fixed",
        height: "100%",
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
        <AppMenu items={menu} />
      </nav>
    </Sider>
  );
};
