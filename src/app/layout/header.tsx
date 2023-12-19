import Link from "next/link";
import BagIcon from "@/app/assets/shopping-bag.svg";

type Routes = {
  link: string;
  name: string;
};

const ROUTES: Routes[] = [
  {
    link: "",
    name: "Home",
  },
  {
    link: "category/men",
    name: "Men",
  },
  {
    link: "category/women",
    name: "Women",
  },
];

export const Header = (): JSX.Element => {
  return (
    <header className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] flex items-center justify-between g-[20px] pt-[20px]">
        <nav className="w-full flex flex-1 gap-[50px]">
          {ROUTES.map((route) => (
            <Link
              key={route.name}
              href={`/${route.link}`}
              className="text-base font-sans font-semibold text-black"
            >
              {route.name}
            </Link>
          ))}
        </nav>
        <div className="flex-2">
          <Link href="/">
            <div className="w-fit bg-light-black rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <span className="text-3xl font-serif font-bold text-white py-5 px-16 text-center whitespace-nowrap">
                Nycs Shoes
              </span>
            </div>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <BagIcon className="cursor-pointer"/>
        </div>
      </div>
    </header>
  );
};
