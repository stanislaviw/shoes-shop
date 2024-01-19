import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  type: "classic" | "outline";
  disabled?: boolean;
};

const CLASSIC_BUTTON_STYLES: string =
  "bg-light-black hover:bg-dark-black text-white py-5 disabled:cursor-not-allowed disabled:bg-dark-black";
const OUTLINE_BUTTON_STYLES: string =
  "bg-white hover:border-dark-black text-black border-[3px] border-black py-4 disabled:cursor-not-allowed";

export const Button = ({
  children,
  onClick,
  type,
  disabled,
}: ButtonProps): JSX.Element => {
  const buttonType: string =
    type === "outline" ? OUTLINE_BUTTON_STYLES : CLASSIC_BUTTON_STYLES;

  return (
    <button
      disabled={disabled}
      className={`w-full text-base font-serif font-medium uppercase rounded-xl ${buttonType}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
