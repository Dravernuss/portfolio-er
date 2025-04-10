import { ImPointRight } from "react-icons/im";

export default function AboutCard() {
    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <blockquote className="text-justify text-gray-800 dark:text-gray-200">
        <p className="mb-4">
          Hi Everyone, I am{" "}
          <span className="text-purple-500 font-semibold">Soumyajit Behera</span>{" "}
          from{" "}
          <span className="text-purple-500 font-semibold">Bhubaneswar, India.</span>
          <br />
          I am currently employed as a software developer at Juspay.
          <br />
          I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="list-none space-y-2 mb-4 ml-7">
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-500" />
            <span>Playing Games</span>
          </li>
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-500" />
            <span>Writing Tech Blogs</span>
          </li>
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-500" />
            <span>Travelling</span>
          </li>
        </ul>
        <p className="text-purple-400 italic mb-2 text-center">
          "Strive to build things that make a difference!"
        </p>
        <footer className="text-sm text-gray-500 dark:text-gray-400 text-center">
          — Soumyajit
        </footer>
      </blockquote>
    </div>
    )
}