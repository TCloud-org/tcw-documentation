export const SearchButton = (props: { onClick?: () => void }) => {
  return (
    <div className="hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        onClick={props.onClick}
        className="hidden h-8 w-full items-center gap-2 rounded-md bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none lg:flex dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="h-5 w-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
          ></path>
        </svg>
        Search anything
        <kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">⌘</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
    </div>
  );
};
