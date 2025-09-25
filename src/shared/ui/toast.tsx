import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useToastStore } from "@/shared/model";
import { Portal } from "./portal";

export const Toast = () => {
  const { isShowing, message } = useToastStore();

  return (
    <Portal>
      <AnimatePresence>
        {isShowing && (
          <motion.div
            layout
            initial={{ opacity: 0.5, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: 12 }}
            transition={{ ease: "easeOut" }}
          >
            <ToastContainer>{message}</ToastContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};


const ToastContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 320px;
  height: 60px;
  padding: 12px 20px;

  border-radius: 30px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  background: #9bb7d4;
  color: #1c4e89;

  bottom: 40px;
  right: 20px;
`;
