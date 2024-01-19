import { TextDataType, TERMS_OF_USE_DATA } from "@/constants/constants";

export const TermsOfUse = (): JSX.Element => {
  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-[30px] py-[100px]">
        <div className="w-full flex flex-col gap-[10px]">
          <h4 className="text-black text-xl font-sans font-extrabold">
            Terms of Use for Nycs Shoes
          </h4>
          <p className="text-black text-[24px] font-serif font-medium">
            Welcome to Nycs Shoes. These terms of use outline the rules and
            regulations for the use of our website.
          </p>
          <p className="text-black text-[24px] font-serif font-medium">
            By accessing this website, we assume you accept these terms of use
            in full. Do not continue to use Nycs Shoes&apos;s website if you do
            not accept all of the terms of use stated on this page.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          {TERMS_OF_USE_DATA.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

type ItemProps = {
  item: TextDataType;
};

const Item = ({ item }: ItemProps): JSX.Element => {
  const { title, text } = item;

  return (
    <div className="flex flex-col gap-[10px]">
      <h5 className="text-black text-xl font-sans font-extrabold">{title}:</h5>
      <p className="text-black text-[24px] font-serif font-medium">{text}</p>
    </div>
  );
};
