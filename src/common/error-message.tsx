import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

export const ErrorMessage = ({ children }: ErrorMessageProps): JSX.Element => {
  return (
    <span className="text-dark-red text-base font-serif font-medium">
      {children}
    </span>
  );
};
