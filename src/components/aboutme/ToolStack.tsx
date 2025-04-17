import {
  SiGithub,
  SiPostman,
  SiSlack,
  SiLinux,
  SiDatagrip,
  SiJenkins,
} from "react-icons/si";
import { FaJira } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

const tools = [
  DiVisualstudio,
  SiGithub,
  SiLinux,
  SiPostman,
  SiSlack,
  FaJira,
  SiDatagrip,
  SiJenkins,
];

export default function ToolStack() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {tools.map((ToolIcon, index) => (
        <div
          key={index}
          className="border-[1.7px] border-[rgba(137,146,230,0.64)] rounded-[5px] p-5 w-1/4 md:w-1/5 text-5xl md:text-8xl flex justify-center text-gray-700 dark:text-white hover:text-indigo-500 transition-transform transform hover:scale-110"
        >
          <ToolIcon />
        </div>
      ))}
    </div>
  );
}
