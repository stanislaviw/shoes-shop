import { Promo } from "@/app/common/promo";

export const Home = (): JSX.Element => {
  return (
    <div className="w-full">
      <Promo
        title="Built for flight"
        text="Introducing Nycs Shoes Our lightest shoes, ever."
        link="#"
      />
    </div>
  );
};
