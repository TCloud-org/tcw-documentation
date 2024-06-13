import { Image, ImageProps } from "antd";
import { logoImageUrl } from "../config/businessConfig";

export const AppLogo = (props: ImageProps & { flip?: boolean }) => {
  const { width = 32, preview = false } = props;
  return (
    <Image {...props} src={logoImageUrl} width={width} preview={preview} />
  );
};
