export type HttpMethod = "POST" | "GET" | "DELETE" | "PUT";

const methodColor = {
  POST: "ring-sky-300 bg-sky-400/10 text-sky-500",
  GET: "ring-emerald-300 bg-emerald-400/10 text-emerald-500",
  PUT: "ring-amber-300 bg-amber-400/10 text-amber-500",
  DELETE: "ring-rose-200 bg-rose-50 text-red-500",
};

export const ApiMethodHeading = (props: {
  method: HttpMethod;
  endpoint: string;
}) => {
  return (
    <div className="flex items-center gap-x-3">
      <span
        className={`font-mono text-[0.625rem] font-semibold leading-6 rounded-lg px-1.5 ring-1 ring-inset ${
          methodColor[props.method]
        }`}
      >
        {props.method}
      </span>
      <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
      <span className="font-mono text-xs text-zinc-400">{props.endpoint}</span>
    </div>
  );
};
