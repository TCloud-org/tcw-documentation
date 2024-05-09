import { ReactNode } from "react";
import { primaryColor } from "../config/businessConfig";

export const ColorLink = (props: {
  href?: string;
  target?: string;
  rel?: string;
  children?: string | ReactNode;
}) => {
  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      className="color-link"
    >
      {props.children}
    </a>
  );
};
