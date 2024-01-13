import { Dialog } from "@/common/dialog";

type HomeDialog = {
  handleClose: () => void;
  isOpen: boolean;
};

export const HomeDialog = ({
  handleClose,
  isOpen,
}: HomeDialog): JSX.Element => {
  return (
    <Dialog onClose={handleClose} isOpen={isOpen}>
      <div>dialog</div>
    </Dialog>
  );
};
