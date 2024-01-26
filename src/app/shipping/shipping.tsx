import { SHIPPING_INFO_DATA, EMAIL } from "@/constants/constants";
import { TextDataType } from "@/app/definitions";
import Link from "next/link";

export const Shipping = (): JSX.Element => {
  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-[30px] py-[100px]">
        <div className="w-full flex flex-col gap-[10px]">
          <h4 className="text-black text-xl font-sans font-extrabold">
            Shipping Information:
          </h4>
          <p className="text-black text-[24px] font-serif font-medium">
            At Nysc Shoes, we are committed to providing you with a seamless
            shopping experience, including swift and reliable delivery services.
            Here are the details of our shipping policies:
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          {SHIPPING_INFO_DATA.map((item) => (
            <Item item={item} key={item.id} />
          ))}
          <p className="text-black text-[24px] font-serif font-medium">
            Feel free to reach out to our customer support team at{" "}
            <Link className="font-extrabold" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </Link>{" "}
            if you have any questions or concerns regarding your order or
            shipping.
          </p>
          <p className="text-black text-[24px] font-serif font-medium">
            Thank you for choosing Nysc Shoes. We look forward to serving you
            with the latest trends and exceptional footwear!
          </p>
          <p className="text-black text-[24px] font-serif font-medium">
            Best regards, Nysc Shoes Team!
          </p>
        </div>
      </div>
    </section>
  );
};

type ItemProps = {
  item: TextDataType;
};

const Item = ({ item }: ItemProps): JSX.Element => {
  const { title, text, id } = item;

  return (
    <div className="flex flex-col gap-[10px]">
      <h5 className="text-black text-xl font-sans font-extrabold">
        {id}.{title}
      </h5>
      <p className="text-black text-[24px] font-serif font-medium">{text}</p>
    </div>
  );
};
