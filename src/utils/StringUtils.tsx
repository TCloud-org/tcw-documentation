export const encodeSectionId = (section: string) => {
  return section
    .replaceAll(/[^\w\s]/g, "")
    .replaceAll(/\s+/g, "-")
    .toLowerCase();
};

export const cleanSection = (section: string) => {
  return section.replaceAll(/[^\w\s]/g, "").replaceAll(" ", "");
};

export const decodeSectionId = (sectionId: string) => {
  return sectionId.split("-").join("");
};

export const getFirstPath = (path: string) => {
  const comp = path.split("/");
  if (comp.length <= 2) {
    return "";
  }
  return comp[2];
};
