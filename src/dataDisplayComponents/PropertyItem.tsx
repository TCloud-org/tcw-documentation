import { Typography } from "antd";

export interface PropertyItemProps {
  property?: string;
  type?: string;
  description?: string;
  mandatory?: boolean;
}

export const PropertyItem = (props: PropertyItemProps) => {
  return (
    <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
      <dt className="sr-only">Name</dt>
      <dd>
        <Typography.Text>
          <code>{props.property}</code>
        </Typography.Text>
      </dd>
      <dt className="sr-only">Type</dt>
      <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
        {props.type}
      </dd>
      {props.mandatory && (
        <dd className="font-mono text-xs text-red-400">Mandatory</dd>
      )}
      <dt className="sr-only">Description</dt>
      <dd className="w-full flex-none [&amp;>:first-child]:mt-0 [&amp;>:last-child]:mb-0">
        <p>{props.description}</p>
      </dd>
    </dl>
  );
};
