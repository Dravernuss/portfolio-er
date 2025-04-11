import { IconType } from "react-icons";

export type Feature = {
  name: string;
  description: string;
  icon: any;
};

export type Navigation = {
  name: string;
  href: string;
  d: string;
};

export type SocialLinks = {
  href: string;
  icon: IconType;
};

export type Hobbies = {
  activity: string,
  icon: IconType
}

export type Projects = {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
}