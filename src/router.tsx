import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";
import Resume from "./views/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
