import { Button } from "@/common/button";
import { Dialog } from "@/common/dialog";
import { ErrorMessage } from "@/common/error-message";
import { EMAIL_VALIDATION_PATTERN } from "@/constants/constants";
import { ChangeEvent, useEffect, useState } from "react";

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
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    if (EMAIL_VALIDATION_PATTERN.test(value)) {
      setError(false);
    } else {
      setError(true);
    }
    setEmail(value);
  };

  useEffect(() => {
    setEmail("");
    setError(false);
    setIsSubmited(false);
  }, []);

  return (
    <Dialog onClose={handleClose} isOpen={isOpen}>
      <div className="w-[550px]">
        <div className="w-full flex flex-col gap-[10px]">
          {isSubmited ? (
            <Placeholder handleClose={handleClose} email={email} />
          ) : (
            <>
              <label
                htmlFor="email"
                className="text-base font-serif font-medium"
              >
                In order to subscribe, you need to enter your email.
              </label>
              <input
                className={`bg-white text-black border-[3px] w-full text-base font-serif font-medium rounded-xl py-4 px-5 ${
                  error ? "border-dark-red" : "border-black"
                }`}
                id="email"
                type="text"
                placeholder="Enter email..."
                value={email}
                onChange={handleChangeEmail}
              />
              {error && <ErrorMessage>Email must be an email </ErrorMessage>}
              <Button
                onClick={() => setIsSubmited(true)}
                text="Subscribe"
                type="classic"
                disabled={error || !email}
              />
            </>
          )}
        </div>
      </div>
    </Dialog>
  );
};

type PlaceholderProps = {
  handleClose: () => void;
  email: string;
};

const Placeholder = ({ handleClose, email }: PlaceholderProps): JSX.Element => {
  return (
    <>
      <p className="text-base font-serif font-medium">
        Congratulations! You&apos;ve subscribed, look forward to receiving
        emails to this address
        <span className="font-semibold"> {email}</span>
      </p>
      <Button onClick={handleClose} text="close" type="outline" />
    </>
  );
};
