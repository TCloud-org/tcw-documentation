import { theme } from "antd";
import { Header } from "antd/es/layout/layout";

export const AppHeader = () => {
  const { token } = theme.useToken();

  return (
    <Header
      className=" bg-white/50 h-14 fixed w-auto top-0 left-72 right-0 z-10 backdrop-blur-sm"
      style={{ borderBottom: `1px solid ${token.colorBorder}` }}
    >
      <div></div>
    </Header>
  );
};
