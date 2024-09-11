import { StaticImageData } from "next/image";

// Type for Toolkit entry
export type Tool = {
  image: StaticImageData;
  href: string;
  alt: string;
}

// Type for a single Toolkit
export type ToolkitProps = {
  toolkit: Tool[];
};

// Type for a project title
export type ProjectTitle = {
  heading: string;
  link: string;
};

// Type for a project image
export type ProjectImage = {
  src: StaticImageData | string; // for images imported via 'import'
  alt: string;
  width?: number; // Optional as some images use default values
  height?: number;
};

// Type for a single project
export type ProjectProps = {
  title: ProjectTitle;
  image: ProjectImage;
  description: string;
  toolkit?: Tool[]; // Optional toolkit
};

// Type for the array of projects
export type Projects = ProjectProps[];
