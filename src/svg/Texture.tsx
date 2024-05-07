export const Texture = () => {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
    >
      <defs>
        <pattern
          id=":S1:"
          width="72"
          height="56"
          patternUnits="userSpaceOnUse"
          x="-12"
          y="4"
        >
          <path d="M.5 56V.5H72" fill="none"></path>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#:S1:)"
      ></rect>
      <svg x="-12" y="4" className="overflow-visible">
        <rect stroke-width="0" width="73" height="57" x="288" y="168"></rect>
        <rect stroke-width="0" width="73" height="57" x="144" y="56"></rect>
        <rect stroke-width="0" width="73" height="57" x="504" y="168"></rect>
        <rect stroke-width="0" width="73" height="57" x="720" y="336"></rect>
      </svg>
    </svg>
  );
};
