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

export type socialLinks = {
  href: string;
  icon: IconType;
};
