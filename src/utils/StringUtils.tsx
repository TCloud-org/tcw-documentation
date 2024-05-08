export const encodeSectionId = (section: string) => {
  return section.replace(/\s+/g, "-").toLowerCase();
};

export const decodeSectionId = (sectionId: string) => {
  return sectionId.split("-").join(" ");
};
