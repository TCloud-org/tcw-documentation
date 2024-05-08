import { ReactNode } from "react";

export interface AnchorButtonProps {
  children?: string | ReactNode;
  href?: string;
  target?: string;
  type?: "default" | "light";
}

export const AnchorButton = (props: AnchorButtonProps) => {
  if (props.type === "light") {
    return <LightAnchorButton {...props} />;
  }

  return (
    <a
      className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-md hover:text-white bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  );
};

const LightAnchorButton = (props: AnchorButtonProps) => {
  return (
    <a
      className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-md  py-1 px-3 text-zinc-700 ring-1 ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  );
};
