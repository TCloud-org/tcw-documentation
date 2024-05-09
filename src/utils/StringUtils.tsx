export const encodeSectionId = (section: string) => {
  return section
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const decodeSectionId = (sectionId: string) => {
  return sectionId.split("-").join(" ");
};

export const getFirstPath = (path: string) => {
  const comp = path.split("/");
  if (comp.length <= 2) {
    return "";
  }
  return comp[2];
};
