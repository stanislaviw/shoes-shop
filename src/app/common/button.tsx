type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      className="w-full text-white text-base font-serif font-medium uppercase bg-light-black rounded-xl hover:bg-dark-black py-5"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
