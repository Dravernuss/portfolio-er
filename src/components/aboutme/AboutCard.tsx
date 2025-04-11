import { hobbies } from "../../utils/data";
import Hobbie from "./Hobbie";


export default function AboutCard() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <blockquote className="text-justify text-gray-800 dark:text-gray-200">
        <p className="mb-4 text-3xs">
          Hi Everyone, I am{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            Esteban Rodas
          </span>{" "}
          from{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            Lima, Perú.
          </span>
          <br />
          I am currently working as a Software Engineer at Redbus.
          <br />
          I hold a Bachelor’s degree in Mechatronics Engineering and I work as a
          Full Stack Developer.
          <br />
          <br />
          Beyond coding, I truly enjoy:
        </p>
        <ul className="list-none space-y-2 mb-4 ml-7">
        {hobbies.map((hobbie) => (
              <Hobbie hobbie={hobbie} />
            ))}
        </ul>
        <p className="text-indigo-600 dark:text-indigo-400 italic mb-2 text-center">
          "Software is a great combination between artistry and engineering."
        </p>
        <footer className="text-sm text-gray-500 dark:text-gray-400 text-center">
          — Bill Gates
        </footer>
      </blockquote>
    </div>
  );
}
