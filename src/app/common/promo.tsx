import Link from "next/link";
import { ReactNode } from "react";

type PromoProps = {
  title: string;
  text: string;
  link: string;
  icon?: ReactNode;
};

export const Promo = ({ title, text, link, icon }: PromoProps): JSX.Element => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] h-[100%] flex">
        <div className="flex flex-col gap-[10px] h-full justify-end">
          <h4 className="w-50 text-black text-4xl font-sans font-extrabold">
            {title}
          </h4>
          <p className="text-black text-2xl font-serif font-medium">{text}</p>
          <Link href={link}>
            <span>Shop</span>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
};
