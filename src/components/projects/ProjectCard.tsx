import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Projects } from "../../types";

type ProjectCardProps = {
  project: Projects;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-95 md:w-1/3 lg:w-1/4">
      <div className="bg-white dark:dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-indigo-500 hover:border-indigo-800 transition-transform transform hover:scale-105">
        <img
          src={project.imgPath}
          alt="project"
          className="w-full p-8 object-cover object-center"
        />
        <div className="p-5 text-gray-900 dark:text-white">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
            {project.title}
          </h2>
          <p className="text-sm text-justify mb-4">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={project.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded transition duration-300"
            >
              <BsGithub />
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded transition duration-300"
              >
                <CgWebsite />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
