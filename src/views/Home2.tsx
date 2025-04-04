import Tilt from "react-parallax-tilt";
import myImg from "../assets/avatar.svg";

import { socialLink } from "../utils/data";
export default function Home2() {
  return (
    <section id="about" className="w-full py-12 px-10 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-white">
              LET ME{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                INTRODUCE{" "}
              </span>
              MYSELF
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️<br />
              <br /> I am fluent in classics like{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">
                PHP, JavaScript, and Go.
              </span>
              <br />
              <br /> My field of interest is building new{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">
                Web Technologies and Products
              </span>
              , and exploring{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">
                Blockchain.
              </span>
              <br />
              <br /> I also develop with{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">
                Node.js{" "}
              </span>
              and modern frameworks like{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold italic">
                React.js and Next.js.
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.5}
            >
              <img src={myImg} alt="avatar" className="w-64 md:w-72 lg:w-80" />
            </Tilt>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            FIND ME ON
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Feel free to{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              connect{" "}
            </span>
            with me
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
