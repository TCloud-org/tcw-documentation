import { theme } from "antd";
import { AppCopy } from "../dataEntryComponents/AppCopy";

export const DisplayInput = (props: { value?: string }) => {
  const { token } = theme.useToken();

  return (
    <div className="border border-solid border-x-slate-200 rounded-md px-2 py-px flex items-center justify-between">
      {props.value}

      <AppCopy value={props.value} color={token.colorText} />
    </div>
  );
};
