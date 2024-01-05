import Link from "next/link";

export const Categories = (): JSX.Element => {
  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-full py-b-[100px] max-w-[1440px] h-[1000px] flex items-center gap-[20px]">
        <Category title="Men" link="/category/men" />
        <Category title="Women" link="/category/women" />
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
    <Link href={link} className="w-full h-full p-[20px] bg-black">
      <div>
        <div>{title}</div>
        <div>123</div>
      </div>
    </Link>
  );
};
