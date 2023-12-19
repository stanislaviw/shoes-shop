import { Promo } from "@/app/common/promo";
import ShoesIcon from "@/app/assets/nike-shoes.svg";

export const Home = (): JSX.Element => {
  return (
    <div className="w-full">
      <Promo
        title="Built for flight"
        text="Introducing Nycs Shoes Our lightest shoes, ever."
        link="#"
        icon={<ShoesIcon />}
      />
    </div>
  );
};
