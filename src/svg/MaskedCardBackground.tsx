export const MaskedCardBackground = (props: { spanRef?: any }) => {
  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
        >
          <defs>
            <pattern
              id=":r5r:"
              width="72"
              height="56"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="16"
            >
              <path d="M.5 56V.5H72" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#:r5r:)"
          ></rect>
          <svg x="50%" y="16" className="overflow-visible">
            <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
            <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
          </svg>
        </svg>
      </div>
      <div
        ref={props.spanRef}
        className="absolute inset-0 left-0 rounded-2xl bg-gradient-to-r from-[#d2c6f7] to-[#dfe6fb] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={{
          maskImage:
            "radial-gradient(180px at 552px 82.5px, white, transparent)",
        }}
      ></div>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={{
          maskImage:
            "radial-gradient(180px at 552px 82.5px, white, transparent)",
        }}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
        >
          <defs>
            <pattern
              id=":r5s:"
              width="72"
              height="56"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="16"
            >
              <path d="M.5 56V.5H72" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#:r5s:)"
          ></rect>
          <svg x="50%" y="16" className="overflow-visible">
            <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
            <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
          </svg>
        </svg>
      </div>
    </div>
  );
};
