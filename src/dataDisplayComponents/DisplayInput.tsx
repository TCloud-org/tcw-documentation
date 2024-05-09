import { theme } from "antd";
import { AppCopy } from "../dataEntryComponents/AppCopy";
import { textColor } from "../dataEntryComponents/CodeBeam";

export const DisplayInput = (props: { value?: string }) => {
  const { token } = theme.useToken();

  return (
    <div
      className="border border-solid border-x-slate-200 rounded-md px-2 py-px flex items-center justify-between"
      style={{ color: textColor }}
    >
      {props.value}

      <AppCopy value={props.value} color={textColor} />
    </div>
  );
};
