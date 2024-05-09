import { Tooltip } from "antd";

export const HelpWord = (props: { children?: string; tooltip?: string }) => {
  return (
    <Tooltip
      title={props.tooltip}
      className="cursor-help underline hover:bg-slate-600/5 transition-all"
    >
      {props.children}
    </Tooltip>
  );
};
