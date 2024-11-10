import Etc from "@/b_pages/etc";
import Career from "@/b_pages/career";
import Contact from "@/b_pages/contact";
import Home from "@/b_pages/home";
import Projects from "@/b_pages/projects";
import Research from "@/b_pages/research";
import Layout from "@/f_shared/ui/layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/research",
        element: <Research />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/etc",
        element: <Etc />,
      },
    ],
  },
]);

export default router;
