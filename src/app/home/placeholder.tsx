import { Button } from "@/common/button";
import { Dialog } from "@/common/dialog";

export const HomePlaceholder = (): JSX.Element => {
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
          <Button
            text="Join mailing list"
            type="outline"
            onClick={() => console.log("lol")}
          />
          <Dialog
            onClose={() => {
              console.log("lol");
            }}
            isOpen={false}
          >
            lolsadfqwerqwer
          </Dialog>
        </div>
      </div>
    </section>
  );
};
