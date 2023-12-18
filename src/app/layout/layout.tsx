import { ReactNode } from "react";
import { Header } from "./header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="w">
      <Header />
      <main>{children}</main>
      <div></div>
    </div>
  );
};
