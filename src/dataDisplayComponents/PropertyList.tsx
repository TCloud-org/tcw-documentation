import { PropertyItem, PropertyItemProps } from "./PropertyItem";

export const PropertyList = (props: { items?: PropertyItemProps[] }) => {
  const { items = [] } = props;

  return (
    <div className="my-6">
      <ul className="m-0 list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5">
        {items.map((item, i) => (
          <li className="m-0 px-0 py-4 first:pt-0 last:pb-0" key={i}>
            <PropertyItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
