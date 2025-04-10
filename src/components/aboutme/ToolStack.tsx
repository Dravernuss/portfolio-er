import {
    SiGithub,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
  } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
  
  const tools = [
    DiVisualstudio,
    SiGithub,
    SiMacos,
    SiPostman,
    SiSlack,
    SiVercel,
  ];

export default function ToolStack() {
    return (
        <div className="flex flex-wrap justify-center gap-8 py-8">
        {tools.map((ToolIcon, index) => (
          <div
            key={index}
            className="text-7xl text-gray-700 dark:text-white hover:text-indigo-500 transition-transform transform hover:scale-120"
          >
            <ToolIcon />
          </div>
        ))}
      </div>
    )
}