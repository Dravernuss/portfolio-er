import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiDocker,
  SiPostgresql,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const icons = [
  DiJavascript1,
  SiPhp,
  TbBrandGolang,
  DiPython,
  DiReact,
  SiTypescript,
  DiNodejs,
  DiMongodb,
  SiMysql,
  SiPostgresql,
  DiGit,
  SiDocker,
  SiTailwindcss,
  SiSass,
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-8 ">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="border-[1.7px] border-[rgba(137,146,230,0.64)] rounded-[5px] p-5 w-1/4 md:w-1/5 text-5xl md:text-8xl flex justify-center text-gray-700 dark:text-white hover:text-indigo-500 transition-transform transform hover:scale-110"
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}
