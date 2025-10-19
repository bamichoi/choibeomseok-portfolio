import { Providers } from "@/app/providers";
import { router } from "@/app/router";

export const App = () => {
  return <Providers router={router} />;
};

