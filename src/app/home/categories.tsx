import Link from "next/link";
import ArrowIcon from "@/app/assets/arrow.svg";

export const HomeCategories = (): JSX.Element => {
  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-full pb-[100px] max-w-[1440px] flex flex-col gap-[30px]">
        <h5 className="w-full text-center text-3xl font-sans font-semibold text-black">
          Choose Category:
        </h5>
        <div id="home-category" className="w-full flex items-center gap-[20px]">
          <Category title="Men" link="/category/men" />
          <Category title="Women" link="/category/women" />
        </div>
      </div>
    </section>
  );
};

type CategoryProps = {
  title: string;
  link: string;
};

const Category = ({ title, link }: CategoryProps): JSX.Element => {
  return (
    <Link
      href={link}
      className="w-full h-[680px] p-[20px] bg-black p-[30px] flex flex-col justify-between hover:bg-dark-black"
    >
      <p className="text-white text-2xl font-serif font-extrabold">{title}</p>
      <div className="flex gap-[20px] items-center">
        <p className="text-white text-xl font-serif font-medium">Shop now</p>
        <ArrowIcon />
      </div>
    </Link>
  );
};
