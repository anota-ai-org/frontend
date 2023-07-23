import * as Dialog from "@radix-ui/react-dialog";
import { Underscore } from "./Underscore";
export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <Underscore className="hover:scale-105 transition-transform">
            <span className="hover:cursor-pointer animate-bounce hover:animate-none hover:font-semibold hover:scale-105 transition-transform bg-clip-text text-transparent bg-backgroundGradient">
              Termos e condições
            </span>
          </Underscore>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-80 absolute inset-0 animate-overlayShow" />
        <Dialog.Content className="inline-flex bg-gray-50  md:min-w-max md:bg-transparent inset-0 fixed ">
          <div className="bg-gray-50 m-auto md:max-w-3xl p-4 rounded-lg flex flex-col items-center gap-4 animate-contentShow">
            <h1 className="text-4xl text-center">Termos e condições</h1>

            <p className="text-xl text-left mt-3 leading-8 animate-fadeIn">
              Lorem ipsum dolor sit amet consectetur.{" "}
              <Underscore>liquet dui facilisis bibendum</Underscore> eget
              convallis tempus suspendisse lectus sodales. Sed odio id morbi
              non. Massa aliquet imperdiet massa eget ac enim et accumsan. Neque
              cursus augue ut a auctor in maecenas ipsum. Netus dui pretium
              aliquam arcu egestas rutrum libero faucibus varius. Quam amet
              massa eu elementum nunc.
            </p>

            <Dialog.Close asChild>
              <button className="bg-backgroundGradient p-2 rounded-md text-white font-bold">
                Fechar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
