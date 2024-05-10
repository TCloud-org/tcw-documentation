import { Typography } from "antd";
import { AppLogo } from "./AppLogo";

export const AppLogoText = (props: { className?: string }) => {
  return (
    <a href="/" className={`items-center flex gap-2 ${props.className}`}>
      <AppLogo />
      <Typography.Text strong>The Cloud Docs</Typography.Text>
    </a>
  );
};
