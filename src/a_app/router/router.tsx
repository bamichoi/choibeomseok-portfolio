import Etc from "@/b_pages/etc/ui/etc";
import Career from "@/b_pages/career/ui/career";
import Contact from "@/b_pages/contact/ui/contact";
import Home from "@/b_pages/home/ui/home";
import Projects from "@/b_pages/project/ui/projects";
import Research from "@/b_pages/research/ui/research";
import Layout from "@/a_app/ui/layout";
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
