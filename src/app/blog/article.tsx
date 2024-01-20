import { useEffect, useState } from "react";
import { ArticleDataType, BLOG_DATA } from "@/app/blog/data";
import { useRouter } from "next/router";

export const BlogArticle = (): JSX.Element => {
  const [data, setData] = useState<ArticleDataType>();

  const router = useRouter();
  const { id } = router.query;

  console.log(data);

  useEffect(() => {
    const data = BLOG_DATA.filter((item) => item.id === id);
    setData(data[0]);
  }, [id]);

  return <div>{id}</div>;
};
