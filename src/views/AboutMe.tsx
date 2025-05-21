import Tilt from "react-parallax-tilt";
import AboutCard from "../components/aboutme/AboutCard";
import TechStack from "../components/aboutme/TechStack";
import ToolStack from "../components/aboutme/ToolStack";
import laptopImg from "../assets/laptop.png";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen pt-5 bg-gray-100  bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-[#1a1a2e] dark:via-[#1f1f3d] dark:to-[#000]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center px-5 md:px-15 lg:px-20">
          <div className="md:w-7/12 flex justify-center flex-col items-center mt-10 md:mt-0">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              {t("aboutme.knowwho")}{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                {t("aboutme.iam")}
              </span>
            </h1>
            <AboutCard />
          </div>
          <div className=" w-3/4 md:w-5/12 pt-10 ">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0}
            >
              <img src={laptopImg} alt="about" className="w-fit h-auto" />
            </Tilt>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t("aboutme.professional")}{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {t("aboutme.skillset")}
            </span>
          </h1>
          <TechStack />
        </div>

        <div className=" mt-10 md:mt-15 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-indigo-600 dark:text-indigo-400">{t("aboutme.tools")}</span>{" "}
            {t("aboutme.iuse")}
          </h1>
          <ToolStack />
        </div>
      </div>
    </section>
  );
}
