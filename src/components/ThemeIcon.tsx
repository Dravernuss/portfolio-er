import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../hooks/useTheme";

export default function ThemeIcon() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className=" md:flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-md transition bg-transparent text-indigo-600 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600`}
      >
        {theme === "dark" ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
