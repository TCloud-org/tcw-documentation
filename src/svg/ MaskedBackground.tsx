import { Texture } from "./Texture";

export const MaskedBackground = () => {
  return (
    <div className="absolute right-0 top-0 ml-[-38rem] h-[25rem] w-11/12 dark:[mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4312e5] to-[#75ccff] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#4312e5]/30 dark:to-[#75ccff]/30 dark:opacity-100">
        <Texture />
      </div>
    </div>
  );
};
