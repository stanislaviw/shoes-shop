import {
  ABOUT_LINKS,
  HELP_LINKS,
  LEGAL_LINKS,
  LinkType,
  MY_ACCOUNT_LINKS,
} from "@/constants/constants";
import FacebookIcon from "@/app/assets/facebook.svg";
import InstagramIcon from "@/app/assets/instagram.svg";
import LinkedinIcon from "@/app/assets/linkedin.svg";
import TwitterIcon from "@/app/assets/twitter.svg";
import Link from "next/link";

const date = new Date();
const year = date.getFullYear();

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full bg-black flex justify-center">
      <div className="w-full py-[100px] max-w-[1440px] flex flex-col gap-[100px] items-center justify-center">
        <div className="w-full flex justify-between">
          <Item title="My account" links={MY_ACCOUNT_LINKS} />
          <Item title="Help" links={HELP_LINKS} />
          <Item title="About" links={ABOUT_LINKS} />
          <Item title="Legal staff" links={LEGAL_LINKS} />
        </div>
        <div className="w-full flex justify-start flex flex-col gap-[30px]">
          <p className="text-dark-grey text-xl font-serif font-medium uppercase">
            Follow us
          </p>
          <div className="flex gap-[10px]">
            <Link href="#">
              <FacebookIcon />
            </Link>
            <Link href="#">
              <InstagramIcon />
            </Link>
            <Link href="#">
              <LinkedinIcon />
            </Link>
            <Link href="#">
              <TwitterIcon />
            </Link>
          </div>
        </div>
        <p className="w-full text-center text-dark-grey text-sm font-serif font-medium">
          © {year} Nycs Shoes, Inc. | All Right Reserved
        </p>
      </div>
    </footer>
  );
};

type ItemProps = {
  title: string;
  links: LinkType[];
};

const Item = ({ title, links }: ItemProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-dark-grey text-xl font-serif font-medium uppercase">
        {title}
      </p>
      <div className="flex flex-col gap-[10px] text-base font-serif font-medium">
        {links.map((item) => (
          <Link key={item.link} href={item.link} className="text-white ">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
