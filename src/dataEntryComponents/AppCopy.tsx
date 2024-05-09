import {
  ContentCopyRounded,
  LibraryAddCheckRounded,
} from "@mui/icons-material";
import { Tooltip } from "antd";
import { textColor } from "./CodeBeam";
import { useState } from "react";

export const AppCopy = (props: { value?: string; color?: string }) => {
  const { value = "", color = textColor } = props;

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
      <Tooltip title="Copied">
        <LibraryAddCheckRounded style={{ color: color, fontSize: 18 }} />
      </Tooltip>
    );
  }

  return (
    <Tooltip title="Copy">
      <ContentCopyRounded
        style={{ color: color, cursor: "pointer", fontSize: 18 }}
        onClick={handleCopy}
      />
    </Tooltip>
  );
};
