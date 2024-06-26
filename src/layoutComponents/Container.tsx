import { CSSProperties, ReactNode } from "react";

export const Container = (props: {
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div className="relative flex h-full flex-col pt-14" style={props.style}>
      <main className="flex-auto">
        <article className="flex h-full flex-col pb-10">
          <div className="flex-auto ml-0 lg:ml-80">
            <div className="xl:max-w-7xl ml-auto mr-auto">{props.children}</div>
          </div>
        </article>
      </main>
    </div>
  );
};
