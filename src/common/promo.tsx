import { ReactNode } from "react";
import { Button } from "@/common/button";
import { useRouter } from "next/router";

type PromoProps = {
  title: string;
  text: string;
  link: string;
  icon: ReactNode;
};

export const Promo = ({ title, text, link, icon }: PromoProps): JSX.Element => {
  const router = useRouter();

  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-full py-b-[100px] max-w-[1440px] h-[1000px] flex items-center">
        <div className="w-full h-full flex flex-col gap-[10px] h-full justify-center">
          <h4 className="text-black text-4xl font-sans font-extrabold">
            {title}
          </h4>
          <p className="text-black text-2xl font-serif font-medium">{text}</p>
          <Button type="classic" onClick={() => router.push(link)}>
            Shop
          </Button>
        </div>
        <div className="w-full h-full flex items-start justify-center">
          <div className="w-[70%] h-full">{icon}</div>
        </div>
      </div>
    </section>
  );
};
