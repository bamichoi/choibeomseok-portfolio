import { ReactNode } from "react";
import ReactDom from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

const Portal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById("portal");
  return ReactDom.createPortal(children, el!);
};

export default Portal;
