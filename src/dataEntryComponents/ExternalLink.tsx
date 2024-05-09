import { ExportOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

export const ExternalLink = (props: {
  children?: string | ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}) => {
  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.target === "_blank" ? "noreferrer" : props.rel}
    >
      {props.children} <ExportOutlined />
    </a>
  );
};
