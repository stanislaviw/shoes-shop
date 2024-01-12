import { ReactNode } from "react";
import React from "react";
import Modal from "react-modal";

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
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onClose}>
        X
      </button>
      {children}
    </Modal>
  );
};
