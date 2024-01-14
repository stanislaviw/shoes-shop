import { Button } from "@/common/button";
import { Dialog } from "@/common/dialog";
import { EMAIL_VALIDATION_PATTERN } from "@/constants/constants";
import { ChangeEvent, useState } from "react";

type HomeDialog = {
  handleClose: () => void;
  isOpen: boolean;
};

export const HomeDialog = ({
  handleClose,
  isOpen,
}: HomeDialog): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    if (EMAIL_VALIDATION_PATTERN.test(value)) {
      setError(false);
    } else {
      setError(true);
    }
    setEmail(value);
  };

  return (
    <Dialog onClose={handleClose} isOpen={isOpen}>
      <div className="w-[550px]">
        <div className="w-full flex flex-col gap-[10px]">
          <label htmlFor="email" className="text-base font-serif font-medium">
            In order to subscribe, you need to enter your email.
          </label>
          <input
            className="bg-white text-black border-[3px] border-black w-full text-base font-serif font-medium rounded-xl py-4 px-5"
            id="email"
            type="text"
            placeholder="Enter email..."
            value={email}
            onChange={handleChangeEmail}
          />
          {error && <span>lol</span>}
          <Button
            onClick={() => console.log("lol")}
            text="Subscribe"
            type="classic"
          />
        </div>
      </div>
    </Dialog>
  );
};
