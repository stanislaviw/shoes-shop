import { Button } from "@/common/button";
import { useToggle } from "@/utils/useToggle";
import { HomeDialog } from "@/app/home/dialog";

export const HomePlaceholder = (): JSX.Element => {
  const { value, handleOpen, handleClose } = useToggle();

  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-full pb-[100px] max-w-[1440px] h-[1000px] flex flex-col items-center justify-center">
        <div className="w-[560px] flex flex-col items-center gap-[30px] text-center">
          <h5 className="w-full text-black text-2xl font-sans font-extrabold">
            Never miss a drop.
          </h5>
          <p className="text-black text-xl font-serif font-medium">
            Receive updates about new products and promotions
          </p>
          <Button type="outline" onClick={handleOpen}>
            Join mailing list
          </Button>
          <HomeDialog handleClose={handleClose} isOpen={value} />
        </div>
      </div>
    </section>
  );
};
