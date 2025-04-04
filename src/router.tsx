import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    children: [
      {
        index: true,
        element: <div>Index</div>,
      },
    ],
  },
]);
