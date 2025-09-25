import { create } from "zustand";

type ToastMessageType = "notice";

interface ShowToastParams {
  message: string;
  type: ToastMessageType;
}

interface UseToastStoreProps {
  message: string;
  type: ToastMessageType;
  isShowing: boolean;

  showToast: ({ message, type }: ShowToastParams) => void;
  closeToast: () => void;
}

export const useToastStore = create<UseToastStoreProps>((set) => ({
  message: "",
  type: "notice",
  isShowing: false,

  showToast: ({ message, type }) => {
    set({
      message,
      type,
      isShowing: true,
    });

    setTimeout(() => {
      set({
        message: "",
        type: "notice",
        isShowing: false,
      });
    }, 3000);
  },

  closeToast: () =>
    set({
      message: "",
      type: "notice",
      isShowing: false,
    }),
}));

