import Tilt from "react-parallax-tilt";
import myImg from "../assets/avatar.svg";
import { useTranslation } from "react-i18next";
import { socialLink } from "../utils/data";

export default function Home2() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="w-full py-12 px-10 bg-gray-100 dark:bg-gradient-to-r from-[#1a1a2e] via-[#1f1f3d] to-[#000]"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-900 dark:text-white">
              {t("home.home2.letme")}{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
              {t("home.home2.introduce")}{" "}
              </span>
              {t("home.home2.myself")}
            </h1>
            <br />
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("home.home2.description1")}
              <br />
              <br /> {t("home.home2.description2")}{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">
              {t("home.home2.span1")}
              </span>
              <br />
              <br /> {t("home.home2.description3")}{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">
              {t("home.home2.span2")}{" "}
              </span>
              {t("home.home2.with")}{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">
              {t("home.home2.span3")}
              </span>
              <br />
              <br /> {t("home.home2.description4")}
            </p>
          </div>
          <div className="flex justify-center">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0}
            >
              <img src={myImg} alt="avatar" className="w-64 md:w-72 lg:w-80" />
            </Tilt>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("home.home2.findme")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("home.home2.feelfree")}{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {t("home.home2.connect")}{" "}
            </span>
            {t("home.home2.withme")}
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            {socialLink.map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              >
                <Icon className="hidden md:flex md:w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
