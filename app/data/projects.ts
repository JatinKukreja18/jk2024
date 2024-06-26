export type ProjectType = {
  title: string;
  banner: string;
};
export const projects: Record<ProjectType["title"], ProjectType> = {
  kbf: {
    title: "Kochi Biennale Foundation",
    banner: "images/projects/KBF.png",
  },
  bandf: {
    title: "Border and Fall",
    banner: "images/projects/BANDF.png",
  },
  cm: {
    title: "Club Marriott",
    banner: "images/projects/CLUBMARRIOTT.png",
  },
  feat: {
    title: "Feat Artists",
    banner: "images/projects/FEAT.png",
  },
  pranoysarkar: {
    title: "Pranoy Sarkar",
    banner: "images/projects/PRANOY.png",
  },
  rij: {
    title: "RIJUTA",
    banner: "images/projects/RIJ.png",
  },
  sqdn: {
    title: "Squadron 14",
    banner: "images/projects/SQDN.png",
  },
  rawmango: {
    title: "Raw Mango Other",
    banner: "images/projects/RAWMANGO.png",
  },
  injiri: {
    title: "INJIRI",
    banner: "images/projects/INJIRI.png",
  },
  sgvvo: {
    title: "sgvvo",
    banner: "images/projects/sgvvo.png",
  },
  shroomery: {
    title: "Shroomery",
    banner: "images/projects/shroomery.png",
  },
  islaridge: {
    title: "Isla's Ridge",
    banner: "images/projects/islaridge.png",
  },
};
