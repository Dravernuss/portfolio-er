import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../utils/data";

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-[#1a1a2e] dark:via-[#1f1f3d] dark:to-[#000]">
      <div className="max-w-8xl mx-auto py-20 md:py-25">
        <div className="max-w-8xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h1>
          <p className="text-gray-900 dark:text-white mb-10">
            Here are a few projects I've worked on.
          </p>

          <div className="flex flex-wrap justify-center gap-7">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
