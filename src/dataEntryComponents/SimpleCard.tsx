import { motion } from "framer-motion";
import { CSSProperties, useEffect, useRef } from "react";
import { IconType } from "react-icons";

export interface SimpleCardProps {
  title?: string;
  subtitle?: string;
  Icon: IconType;
  href: string;
  style?: CSSProperties;
}

export const SimpleCard = (props: SimpleCardProps) => {
  const { Icon } = props;
  const btnRef = useRef<HTMLDivElement | null>(null);
  const radialRef = useRef<HTMLDivElement | null>(null);
  const textureRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = (
        e.target as HTMLElement
      ).getBoundingClientRect();

      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;

      textureRef.current!.animate(
        {
          maskImage: `radial-gradient(180px at ${x}% ${y}%, white, transparent)`,
        },
        { duration: 250, fill: "forwards" }
      );
      radialRef.current!.animate(
        {
          maskImage: `radial-gradient(180px at ${x}% ${y}%, white, transparent)`,
        },
        { duration: 250, fill: "forwards" }
      );
    };

    const buttonRef = btnRef.current;

    buttonRef?.addEventListener("mousemove", handleMouseMove);

    return () => {
      buttonRef?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={btnRef}
      style={{ flex: 1 }}
      className="group overflow-hidden relative w-full flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          >
            <defs>
              <pattern
                id=":r2q:"
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
              fill="url(#:r2q:)"
            ></rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
        <div
          ref={radialRef}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ede9ff] to-[#ede9ff] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        />
        <div
          ref={textureRef}
          className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        >
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          >
            <defs>
              <pattern
                id=":r2r:"
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
              fill="url(#:r2r:)"
            ></rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
      <div className="relative rounded-2xl px-4 pb-4 pt-16 w-full">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
          <Icon />
        </div>
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <a href={props.href} className="hover:text-black">
            <span className="absolute inset-0 rounded-2xl"></span>
            {props.title}
          </a>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 break-words break-all">
          {props.subtitle}
        </p>
      </div>
    </motion.div>
  );
};
