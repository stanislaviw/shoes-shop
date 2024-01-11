import Link from "next/link";
import { DataType, BLOG_DATA } from "@/app/blog/data";

export const Blog = (): JSX.Element => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center">
        <div className="w-full py-[100px] max-w-[1440px] flex flex-col gap-[30px]">
          <h4 className="w-full text-center text-3xl font-sans font-semibold text-black">
            All Articles:
          </h4>
          <div className="flex gap-[30px] w-full h-full">
            {BLOG_DATA.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type ItemProps = {
  item: DataType;
};

const Item = ({ item }: ItemProps): JSX.Element => {
  const { id, title } = item;

  return (
    <Link href={`/blog/${id}`} className="w-full h-full">
      <div className="w-full h-full border-[2px] border-light-black rounded-xl flex flex-col overflow-hidden">
        <div className="w-full h-full bg-light-black p-5 text-white text-2xl font-sans font-extrabold">
          {title}
        </div>
        <div className="p-5 text-black text-2xl font-sans font-semibold">
          Read 5-10 min
        </div>
      </div>
    </Link>
  );
};
