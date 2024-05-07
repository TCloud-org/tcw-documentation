import { Texture } from "./Texture";

export const MaskedBackground = () => {
  return (
    <div className="pointer-events-none z-0">
      <div className="absolute inset-0 ml-72 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4312e5] to-[#75ccff] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#4312e5]/30 dark:to-[#75ccff]/30 dark:opacity-100">
            <Texture />
          </div>
        </div>
      </div>
    </div>
  );
};
