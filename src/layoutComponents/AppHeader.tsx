import { theme } from "antd";
import { Header } from "antd/es/layout/layout";

export const AppHeader = () => {
  const { token } = theme.useToken();

  return (
    <Header
      className="bg-white h-14"
      style={{ borderBottom: `1px solid ${token.colorBorder}` }}
    >
      <div></div>
    </Header>
  );
};
