import * as Dialog from "@radix-ui/react-dialog";
import { Underscore } from "./Underscore";
import Image from "next/image";
import pencil from "../assets/pencil.svg";
import book from "../assets/book.svg";

export function ABoutModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex md:hidden mt-5 animate-pulse" onClick={() => ""}>
          <Image
            priority={true}
            fetchPriority="high"
            className={`p-0 animate-[fadeIn_400ms_ease-in-out] w-8  h-64 `}
            alt="Caneta"
            src={pencil}
          />
          <Image
            priority={true}
            fetchPriority="high"
            className={` hover:cursor-pointer md:animate-[fadeIn_400ms_ease-in-out] p-0 w-44 h-64`}
            alt="Livro de anotações"
            src={book}
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black fixed inset-0 opacity-80" />
        <Dialog.Content className=" w-full h-full flex justify-center items-center rounded-md inset-0 bg-transparent p-2 fixed ">
          <div className=" text-xs leading-8 flex flex-col p-2  bg-sheetCopybook rounded-md text-left m-auto w-full">
            <Underscore lineBold="sm" fullLine={true} bgTailwind="bg-red-600">
              <strong>O aplicativo AnotAí trará recursos como:</strong>{" "}
            </Underscore>
            <ul className="list-item">
              <li className=" w-full ">
                <Underscore
                  lineBold="sm"
                  fullLine={true}
                  bgTailwind="bg-red-600"
                >
                  ▪ Organização de referências e suas anotações.
                </Underscore>
              </li>
              <li className=" w-full ">
                <Underscore
                  lineBold="sm"
                  fullLine={true}
                  bgTailwind="bg-red-600"
                >
                  ▪ Timer para controle de tempo. Criação de mapas
                </Underscore>

                <Underscore
                  lineBold="sm"
                  fullLine={true}
                  bgTailwind="bg-red-600"
                >
                  mentais
                </Underscore>
              </li>
              <li className=" w-full ">
                <Underscore
                  lineBold="sm"
                  fullLine={true}
                  bgTailwind="bg-red-600"
                >
                  ▪ Integração com plataformas como Google Drive,
                </Underscore>

                <Underscore
                  lineBold="sm"
                  fullLine={true}
                  bgTailwind="bg-red-600"
                  className="w-full"
                >
                  Dropbox, entre outras.
                </Underscore>
              </li>
              <li className="w-full ">
                <Underscore
                  lineBold="sm"
                  fullLine={true}
                  bgTailwind="bg-red-600"
                  className="w-full"
                >
                  ▪ Salva o seu progresso em suas anotações e permite a
                </Underscore>{" "}
                <Underscore
                  lineBold="sm"
                  fullLine={true}
                  bgTailwind="bg-red-600"
                  className="w-full"
                >
                  edição de suas anotações da forma que preferir.
                </Underscore>
              </li>
            </ul>

            <Dialog.Close asChild>
              <button className="bg-red-700 inline m-auto mt-5  p-2 rounded-md text-white font-bold">
                Fechar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
