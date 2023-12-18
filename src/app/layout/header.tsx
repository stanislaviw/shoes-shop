import Link from "next/link";

type Routes = {
  code: string;
  name: string;
};

const ROUTES: Routes[] = [
  {
    code: "",
    name: "Home",
  },
  {
    code: "men",
    name: "Men",
  },
  {
    code: "women",
    name: "Women",
  },
];

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <nav>
          {ROUTES.map((route) => (
            <Link key={route.name} href={`/${route.code}`}>
              {route.name}
            </Link>
          ))}
        </nav>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};
