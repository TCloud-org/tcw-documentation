export const MaskedBackground = () => {
  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 ml-72 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4312e5] to-[#75ccff] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#4312e5]/30 dark:to-[#75ccff]/30 dark:opacity-100">
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
                <rect
                  stroke-width="0"
                  width="73"
                  height="57"
                  x="288"
                  y="168"
                ></rect>
                <rect
                  stroke-width="0"
                  width="73"
                  height="57"
                  x="144"
                  y="56"
                ></rect>
                <rect
                  stroke-width="0"
                  width="73"
                  height="57"
                  x="504"
                  y="168"
                ></rect>
                <rect
                  stroke-width="0"
                  width="73"
                  height="57"
                  x="720"
                  y="336"
                ></rect>
              </svg>
            </svg>
          </div>
          <svg
            viewBox="0 0 1113 440"
            aria-hidden="true"
            className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
          >
            <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
