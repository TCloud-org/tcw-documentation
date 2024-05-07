import { CSSProperties, ReactNode } from "react";

export const Container = (props: {
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div className="relative">
      <div className="h-14" />
      <div className="ml-72 px-8" style={props.style}>
        {props.children}
      </div>
    </div>
  );
};
