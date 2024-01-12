type ButtonProps = {
  text: string;
  onClick: () => void;
  type: "classic" | "outline";
};

const CLASSIC_BUTTON_STYLES: string =
  "bg-light-black hover:bg-dark-black text-white";
const OUTLINE_BUTTON_STYLES: string =
  "bg-white hover:border-dark-black text-black border-[3px] border-black";

export const Button = ({ text, onClick, type }: ButtonProps): JSX.Element => {
  const buttonType: string =
    type === "outline" ? OUTLINE_BUTTON_STYLES : CLASSIC_BUTTON_STYLES;

  return (
    <button
      className={`w-full text-base font-serif font-medium uppercase rounded-xl py-5 ${buttonType}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
