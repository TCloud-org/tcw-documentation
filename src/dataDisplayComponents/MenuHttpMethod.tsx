export const MenuHttpMethod = (props: { children?: string }) => {
  return (
    <span className="font-mono text-[0.625rem] font-semibold leading-6 text-zinc-400 dark:text-zinc-500">
      {props.children}
    </span>
  );
};
