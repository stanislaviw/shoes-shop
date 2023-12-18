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
      <div className="w-full flex max-w-[1440px]">
        <nav className="w-full flex gap-[50px]">
          {ROUTES.map((route) => (
            <Link key={route.name} href={`/${route.link}`}>
              {route.name}
            </Link>
          ))}
        </nav>
        <div></div>
        <div>
          <BagIcon />
        </div>
      </div>
    </header>
  );
};
