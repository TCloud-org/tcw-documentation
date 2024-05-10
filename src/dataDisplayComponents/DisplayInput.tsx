import { AppCopy } from "../dataEntryComponents/AppCopy";
import { textColor } from "../dataEntryComponents/CodeBeam";

export const DisplayInput = (props: { value?: string }) => {
  return (
    <div
      className="border-solid border-x-slate-200 rounded-md pr-2 py-px flex items-center justify-between"
      style={{ color: textColor }}
    >
      {props.value}

      <AppCopy value={props.value} color={textColor} />
    </div>
  );
};
