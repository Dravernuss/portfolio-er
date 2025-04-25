import { hobbies } from "../../utils/data";
import { useTranslation } from "react-i18next";
import Hobbie from "./Hobbie";

export default function AboutCard() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <blockquote className="text-justify text-gray-800 dark:text-gray-200">
        <p className="mb-4 text-3xs">
          {t("aboutme.aboutcard.hi")}{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {t("aboutme.aboutcard.span1")}
          </span>{" "}
          {t("aboutme.aboutcard.from")}{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {t("aboutme.aboutcard.span2")}
          </span>
          <br />
          {t("aboutme.aboutcard.description1")}
          <br />
          {t("aboutme.aboutcard.description2")}
          <br />
          <br />
          {t("aboutme.aboutcard.description3")}
        </p>
        <ul className="list-none space-y-2 mb-4 ml-7">
          {hobbies.map((hobbie) => (
            <Hobbie hobbie={hobbie} key={hobbie.activity} />
          ))}
        </ul>
        <p className="text-indigo-600 dark:text-indigo-400 italic mb-2 text-center">
          "{t("aboutme.aboutcard.phrase")}"
        </p>
        <footer className="text-sm text-gray-500 dark:text-gray-400 text-center">
          — {t("aboutme.aboutcard.author")}
        </footer>
      </blockquote>
    </div>
  );
}
