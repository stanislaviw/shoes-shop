import { useEffect, useState } from "react";
import { ArticleDataType, ARTCILES_DATA } from "@/app/blog/data";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

export const BlogArticle = (): JSX.Element => {
  const [data, setData] = useState<ArticleDataType | undefined>(undefined);
  const [paragraphs, setParagraphs] = useState<string[] | undefined>(undefined);

  const router = useRouter();
  const { id } = router.query;

  console.log(data);

  useEffect(() => {
    const data = ARTCILES_DATA.find((item) => item.id === id);

    setData(data);
  }, [id]);

  useEffect(() => {
    const articleText = splitTextIntoParagraphs(data?.fullText);

    setParagraphs(articleText);
  }, [data]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center">
        <div className="w-full py-[100px] max-w-[1440px] flex flex-col gap-[30px]">
          <h4 className="w-full text-center text-3xl font-sans font-semibold text-black">
            {data?.title}
          </h4>
          <div className="flex flex-col gap-[30px] w-full h-full">
            {paragraphs?.map((paragraph) => (
              <p key={uuidv4()}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const splitTextIntoParagraphs = (
  text: string | undefined
): string[] | undefined => {
  if (!text) return undefined;

  const paragraphs = text.split("&&");

  const trimmedParagraphs = paragraphs.map((paragraph) => paragraph.trim());

  return trimmedParagraphs;
};
