import { ReactNode } from "react";
import ReactDom from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById("portal");
  return ReactDom.createPortal(children, el!);
};

