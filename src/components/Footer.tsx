import { socialLink } from "../utils/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-white py-1.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center ">
          <div className="flex justify-center md:justify-start items-center">
            <h3 className="text-xs font-semibold text-black dark:text-white">
              Developed by Esteban Rodas
            </h3>
          </div>

          <div className="flex justify-center items-center">
            <h3 className="text-xs font-semibold text-black dark:text-white">
              Copyright © {year}
            </h3>
          </div>

          <div className="flex justify-center md:justify-end space-x-4 items-center">
            {socialLink.map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-gray-300 hover:text-indigo-600 transition transform hover:scale-110"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
