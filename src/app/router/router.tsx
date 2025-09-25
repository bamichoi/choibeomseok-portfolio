import Etc from "@/pages/etc/ui/etc";
import Career from "@/pages/career/ui/career";
import Contact from "@/pages/contact/ui/contact";
import Home from "@/pages/home/ui/home";
import Projects from "@/pages/project/ui/projects";
import Research from "@/pages/research/ui/research";
import Layout from "@/app/ui/layout";
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
        path: "/projects/:id",
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
