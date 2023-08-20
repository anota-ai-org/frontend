import * as Dialog from "@radix-ui/react-dialog";
import { Form } from "./Form";

export function OpenFormMobile() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-backgroundGradient mt-4 md:hidden md:invisible md:opacity-0 hover:scale-105 transition-transform p-2 rounded-md font-bold text-white">
          Cadastrar-se
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-backgroundGradient  absolute inset-0" />
        <Dialog.Content className="inline-flex w-full bg-backgroundGradient h-full inset-0 fixed overflow-auto">
          <div className="bg-gray-100  m-auto flex flex-col items-center animate-contentShow">
            <Form />

            <Dialog.Close asChild>
              <button className="bg-backgroundGradient p-2 mb-2 rounded-md text-white font-bold">
                Fechar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
