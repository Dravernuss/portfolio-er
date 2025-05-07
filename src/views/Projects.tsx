import ProjectCard from "../components/projects/ProjectCard";
import { useTranslation } from "react-i18next";
import { projects } from "../utils/data";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-[#1a1a2e] dark:via-[#1f1f3d] dark:to-[#000]">
      <div className="max-w-8xl mx-auto py-20 md:py-25">
        <div className="max-w-8xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.my")}{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
            {t("projects.projects")}
            </span>
          </h1>
          <p className="text-gray-900 dark:text-white mb-10">
          {t("projects.description")}
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
