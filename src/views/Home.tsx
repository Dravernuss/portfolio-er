import homeLogo from "../assets/homelogo.png";
import TypeWriter from "../components/home/TypeWriter";
import Home2 from "./Home2";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="bg-cover relative w-full min-h-screen flex flex-col items-center justify-center bg-[url(assets/light.svg)] dark:bg-[url(assets/test.svg)]"
    >
      <div className="container mx-auto px-0 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-10 md:py-20 gap-8 items-center">
          <div className="text-center md:text-left p-10">
            <h1 className="text-2xl md:text-4xl font-medium text-gray-900 dark:text-white">
              {t("home.greeting")}{" "}
              <span
                role="img"
                aria-labelledby="wave"
                className="inline-block animate-wave"
              >
                👋🏻
              </span>
            </h1>
            <h1 className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-indigo-400 mt-4">
            {t("home.iam")}{" "}
              <span className="text-indigo-800 dark:text-indigo-300">
              {t("home.name")}
              </span>
            </h1>
            <div className="mt-14">
              <TypeWriter />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={homeLogo}
              alt="home"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}
