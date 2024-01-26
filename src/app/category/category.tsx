import { ProductType } from "@/app/definitions";
import { useEffect, useState } from "react";
import { ALL_PRODUCTS } from "./data";
import { useRouter } from "next/router";

export const Category = (): JSX.Element => {
  const [data, setData] = useState<ProductType[]>([]);

  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  console.log(data);

  useEffect(() => {
    const data = ALL_PRODUCTS.filter((item) => item.category === name);

    setData(data);
  }, [name]);

  return <div>Category</div>;
};
