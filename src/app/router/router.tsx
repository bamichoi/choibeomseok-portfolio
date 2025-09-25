import { Etc } from "@/pages/etc";
import { Career } from "@/pages/career";
import { Contact } from "@/pages/contact";
import { Home } from "@/pages/home";
import { Projects } from "@/pages/project";
import { Research } from "@/pages/research";
import { Layout } from "@/app/ui";
import { createBrowserRouter } from "react-router-dom";

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

