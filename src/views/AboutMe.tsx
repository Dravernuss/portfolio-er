import AboutCard from "../components/aboutme/AboutCard";
import TechStack from "../components/aboutme/TechStack";
import ToolStack from "../components/aboutme/ToolStack";
import laptopImg from "../assets/about.png";

export default function AboutMe() {
  return (
    <section className="relative w-full min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-7/12 flex justify-center flex-col items-center mt-10 md:mt-0">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Know Who <span className="text-purple-500">I'M</span>
            </h1>
            <AboutCard />
          </div>
          <div className="w-3/4 md:w-5/12 pt-10 md:pt-32">
            <img src={laptopImg} alt="about" className="w-full h-auto" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Professional <span className="text-purple-500">Skillset</span>
          </h1>
          <TechStack />
        </div>

        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-purple-500">Tools</span> I use
          </h1>
          <ToolStack />
        </div>
      </div>
    </section>
  );
}
