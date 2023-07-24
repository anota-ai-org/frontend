import * as Dialog from "@radix-ui/react-dialog";
import { Form } from "./Form";

export function OpenFormMobile() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-backgroundGradient mt-3 md:hidden md:invisible md:opacity-0 hover:scale-105 transition-transform p-2 rounded-md font-bold text-white">
          Cadastrar-se
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-backgroundGradient fixed inset-0" />
        <Dialog.Content className="flex justify-center items-center p-2 w-full h-full inset-0 absolute ">
          <div className="bg-gray-100 h-full rounded-lg flex flex-col items-center animate-contentShow">
            <Form />

            <Dialog.Close asChild>
              <button className="bg-backgroundGradient p-2 rounded-md text-white font-bold">
                Voltar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
