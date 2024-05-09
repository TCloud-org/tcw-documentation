import {
  ContentCopyRounded,
  LibraryAddCheckRounded,
} from "@mui/icons-material";
import { Tooltip } from "antd";
import { textColor } from "./CodeBeam";
import { CSSProperties, useState } from "react";

export const AppCopy = (props: {
  value?: string;
  color?: string;
  className?: string;
  style?: CSSProperties;
}) => {
  const { value = "", color = textColor, className, style } = props;

  const [copy, setCopy] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  if (copy) {
    return (
      <Tooltip title="Copied" style={style} className={className}>
        <LibraryAddCheckRounded style={{ color: color, fontSize: 18 }} />
      </Tooltip>
    );
  }

  return (
    <Tooltip title="Copy" style={style} className={className}>
      <ContentCopyRounded
        style={{ color: color, cursor: "pointer", fontSize: 18 }}
        onClick={handleCopy}
      />
    </Tooltip>
  );
};
