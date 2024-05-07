import { ReactNode } from "react";

export const Container = (props: { children?: ReactNode }) => {
  return (
    <div>
      <div className="h-14" />
      <div className="ml-72 px-24">{props.children}</div>
    </div>
  );
};
