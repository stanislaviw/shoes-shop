import { ReactNode } from "react";
import React from "react";
import Modal from "react-modal";
import CloseIcon from "@/common/assets/close.svg";

type DialogProps = {
  onClose: () => void;
  children: ReactNode;
  isOpen: boolean;
};

export const Dialog = ({
  children,
  onClose,
  isOpen,
}: DialogProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg outline-none"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <button
        className="absolute top-[10px] right-[10px] pointer"
        onClick={onClose}
      >
        <CloseIcon width={24} height={24} />
      </button>
      <div>{children}</div>
    </Modal>
  );
};
