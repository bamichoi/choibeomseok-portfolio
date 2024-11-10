import { RouterProvider } from "react-router-dom";
import type { Router } from "@remix-run/router/dist/router";
import { Reset } from "styled-reset";
import GlobalStyle from "../styles/global";

interface ProvidersProps {
  router: Router;
}

const Providers = ({ router }: ProvidersProps) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default Providers;
