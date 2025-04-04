import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../hooks/useTheme";

type ThemeIconProps = {
  navColor: boolean;
};

export default function ThemeIcon({ navColor }: ThemeIconProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className=" md:flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-md ${
          navColor ? "bg-white dark:bg-gray-900" : "bg-transparent"
        } text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition`}
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
