import { AiOutlineDownload } from "react-icons/ai";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import pdf from "../assets/CV-EN-Rodas.pdf";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import Spinner from "../components/resume/Spinner";

export default function Resume() {
  const pageNavigationPluginInstance = pageNavigationPlugin();

  return (
    <section className="relative w-full min-h-screen  bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-[#1a1a2e] dark:via-[#1f1f3d] dark:to-[#000]">
      <div className="flex justify-center pt-15 pb-10 md:pt-25">
        <a
          href={pdf}
          target="_blank"
          className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded transition duration-300"
        >
          <AiOutlineDownload className="mr-1" />
          Download CV
        </a>
      </div>
      <div className="flex justify-center w-full px-10 md:px-30">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={pdf}
            plugins={[pageNavigationPluginInstance]}
            renderLoader={Spinner}
          />
        </Worker>
      </div>
      <div className="flex justify-center py-10">
        <a
          href={pdf}
          target="_blank"
          className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded transition duration-300"
        >
          <AiOutlineDownload className="mr-1" />
          Download CV
        </a>
      </div>
    </section>
  );
}
