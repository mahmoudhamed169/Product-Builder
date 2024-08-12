import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode, useEffect } from "react";

interface IProps {
  isOpen: boolean;
  closeModel: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ isOpen, closeModel, title, children }: IProps) {
  // Prevent background scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the class on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModel} // make sure to close the modal with the correct handler
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl transition-all duration-300 ease-out">
            <DialogTitle as="h3" className="text-lg font-medium text-black">
              {title}
            </DialogTitle>
            <div className="mt-4">{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
