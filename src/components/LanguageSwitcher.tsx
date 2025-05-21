import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher() {
  const {
    i18n: { language },
  } = useTranslation();

  const handleChangeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <div
      className="flex items-center gap-2 text-indigo-600 dark:text-white"
    >
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChangeLanguage(code)}
          className={`px-2 py-1 text-sm transition-all border-b-2
            ${
              language === code
                ? "border-indigo-500 font-semibold"
                : "border-transparent hover:border-gray-400 dark:hover:border-gray-500"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
