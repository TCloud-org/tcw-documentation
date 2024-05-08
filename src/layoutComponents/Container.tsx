import { CSSProperties, ReactNode } from "react";

export const Container = (props: {
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div
      className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8"
      style={props.style}
    >
      <main className="flex-auto">
        <article className="flex h-full flex-col pb-10">
          <div className="flex-auto ml-72">{props.children}</div>
        </article>
      </main>
    </div>
  );
};
