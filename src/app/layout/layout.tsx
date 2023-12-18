import { ReactNode } from "react";
import { Header } from "@/app/layout/header";
import { Footer } from "@/app/layout/footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <main className="w-full flex min-h-screen overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};
