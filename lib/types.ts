import { StaticImageData } from "next/image";

// Type for Toolkit entry
export type Tool = {
  image: StaticImageData;
  href: string;
  alt: string;
}

// Type for a project title
export type ProjectTitle = {
  heading: string;
  link: string;
  subtitle?: string;
  timeline?: string
};

// Type for the project descriptions
type ProjectDescription = {
  short: string,
  full: string
}

// Type for a project image
export type ProjectImage = {
  src: StaticImageData | string; // for images imported via 'import'
  alt: string;
  width?: number; // Optional as some images use default values
  height?: number;
};

export enum Category {
  Employment = "EMPLOYMENT",
  PrivateClient = "PRIVATE CLIENT",
  PersonalProject = "PERSONAL PROJECT"
}

// Type for a single project
export type Project = {
  id: string,
  tag: string,
  title: ProjectTitle;
  image: ProjectImage;
  category: Category;
  description: ProjectDescription;
  toolkit?: Tool[]; // Optional toolkit
}

// Type for the array of projects
export type Projects = Project[];

// Type for a recommendation entry
export type Recommendation = {
  tag: string,
  name: string,
  position: string,
  link: string,
  text: string;
}
  