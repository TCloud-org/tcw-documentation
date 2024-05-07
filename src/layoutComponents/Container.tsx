import { ReactNode } from "react";

export const Container = (props: { children?: ReactNode }) => {
  return (
    <div>
      <div className="h-14" />
      <div className="flex">
        <div className="w-72" />
        <div className="ml-72">{props.children}</div>
      </div>
    </div>
  );
};
