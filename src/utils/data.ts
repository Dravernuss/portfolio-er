import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaBookReader, FaHeadphones } from "react-icons/fa";
import { IoLogoGameControllerB, IoIosAirplane, IoMdTrendingUp } from "react-icons/io";
import { Hobbies, Navigation, Projects, SocialLinks } from "../types";

export const navigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
    d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    name: "About",
    href: "/about",
    d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  },
  {
    name: "Projects",
    href: "/projects",
    d: "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z",
  },
  {
    name: "Resume",
    href: "/calendar",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  },
  {
    name: "Contact",
    href: "/contact",
    d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z",
  },
];

export const socialLink: SocialLinks[] = [
  { href: "https://github.com/dravernuss", icon: AiFillGithub },
  {
    href: "https://www.linkedin.com/in/esteban-rodas-ramos/",
    icon: FaLinkedinIn,
  },
];

export const hobbies: Hobbies[] = [
  {
    activity: "Playing Games",
    icon: IoLogoGameControllerB
  },
  {
    activity: "Reading books",
    icon: FaBookReader
  },
  {
    activity: "Travelling and discovering new places",
    icon: IoIosAirplane
  },
  {
    activity: "Listening to music",
    icon: FaHeadphones
  },
  {
    activity: "Learning about new technologies",
    icon: IoMdTrendingUp
  }
]

export const projects: Projects[] = [
  {
    imgPath: "./src/assets/about.png",
    title: "Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ghLink: "https://github.com/",
    demoLink: "https://google.com/",
  },
  {
    imgPath: "./src/assets/about.png",
    title: "Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ghLink: "https://github.com/",
    demoLink: "https://google.com/",
  },
  {
    imgPath: "./src/assets/about.png",
    title: "Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ghLink: "https://github.com/",
    demoLink: "https://google.com/",
  },
  {
    imgPath: "./src/assets/about.png",
    title: "Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ghLink: "https://github.com/",
    demoLink: "https://google.com/",
  },
  {
    imgPath: "./src/assets/about.png",
    title: "Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ghLink: "https://github.com/",
    demoLink: "https://google.com/",
  },
  {
    imgPath: "./src/assets/about.png",
    title: "Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ghLink: "https://github.com/",
    demoLink: "https://google.com/",
  },
];
