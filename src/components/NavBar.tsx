import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../utils/data";
import ThemeIcon from "./ThemeIcon";

export default function NavBar() {
  const location = useLocation();
  const [navColor, setNavColor] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setNavColor(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full z-50 transition ${
        navColor ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <h1 className="text-4xl text-indigo-900 font-serif italic">
                    ER.
                  </h1>
                </Link>
              </div>
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-xl font-medium transition ${
                      location.pathname === item.href
                        ? "border-b-1 dark:text-white"
                        : "text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.d}
                      />
                    </svg>
                    {item.name}
                  </Link>
                ))}
                <ThemeIcon navColor={navColor} />
              </div>
              <div className="md:hidden flex items-center gap-4">
                <ThemeIcon navColor={navColor} />
                <DisclosureButton
                  className={`p-2 rounded-md bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition`}
                >
                  {open ? (
                    <XMarkIcon className="w-6 h-6" />
                  ) : (
                    <Bars3Icon className="w-6 h-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>
          <DisclosurePanel
            className={`md:hidden bg-white dark:bg-gray-900 shadow-lg`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition ${
                    location.pathname === item.href
                      ? "bg-indigo-600 text-white"
                      : "text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.d}
                    />
                  </svg>
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
