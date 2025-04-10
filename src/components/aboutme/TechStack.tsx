import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const icons = [
  CgCPlusPlus,
  DiJavascript1,
  TbBrandGolang,
  DiNodejs,
  DiReact,
  SiSolidity,
  DiMongodb,
  SiNextdotjs,
  DiGit,
  SiFirebase,
  SiRedis,
  SiPostgresql,
  DiPython,
  DiJava,
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 py-8">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="text-7xl text-gray-700 dark:text-white hover:text-indigo-500 transition-transform transform hover:scale-110"
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}
