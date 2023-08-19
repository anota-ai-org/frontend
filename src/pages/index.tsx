import Image from "next/image";

import Logo from "../assets/anotai-logo.svg";
import LogoName from "../assets/logo_name.svg";

import book from "../assets/book.svg";
import pencil from "../assets/pencil.svg";
import { Underscore } from "@/components/Underscore";
import { Form } from "@/components/Forms/Form";
import { OpenFormMobile } from "@/components/Forms/OpenFormMobile";
import { useState } from "react";

export default function Home() {
  const [copybook,setCopybook] = useState(false);
  return (
    <main className="w-full h-full text-gray-900 flex flex-col md:flex-row">
      <div className=" flex items-center flex-col p-4 text-center ">
        <h1 className="flex items-center gap-1  mt-3 animate-[fadeIn_200ms_ease-in-out]">
          <Image
            className="h-16 w-20"
            alt="Letra A representando logotipo da marca"
            src={Logo}
          />
          <Image
            className="h-32"
            alt="Logo com o nome A representando a marca"
            src={LogoName}
          />
        </h1>

        <p className="text-xl mt-3 leading-8 animate-fadeIn">
          Suas anotações sempre ao seu alcance.{" "}
          <Underscore className="font-bold">
            {" "}
            Em todos os seus dispositivos e sempre à sua disposição
          </Underscore>
          . Organize seus estudos da forma que você achar melhor e não tenha
          mais dor de cabeça! Não se preocupe, AnotAí!
        </p>
        <div
          className={`inline-flex relative justify-center mt-6 ${
            copybook ? "md:w-full " : "animate-pulse"
          }`}
        >
          <Image
            priority={true}
            fetchPriority="high"
            className={`p-0 animate-[fadeIn_400ms_ease-in-out] w-16  h-96 ${
              copybook
                ? "animate-[pulse_400ms_ease-in] md:absolute  p-0  right-0"
                : ""
            }`}
            alt="Caneta"
            src={pencil}
          />
          <div
            className={
              copybook
                ? "flex w-11/12 mt-10 m-auto animate-fadeIn h-72 items-cent bg-sheetCopybook"
                : ""
            }
          >
            {copybook ? (
              <p className="max-w-xl mt-4 ml-56 leading-9 text-left">
                <Underscore
                  lineBold="sm"
                  fullLine={true}
                  bgTailwind="bg-red-600"
                >
                  <strong>O aplicativo AnotAí trará recursos como:</strong>{" "}
                </Underscore>
                <ul className="list-item">
                  <li className=" w-full list-disc">
                    <Underscore
                      lineBold="sm"
                      fullLine={true}
                      bgTailwind="bg-red-600"
                    >
                      Organização de referências e suas anotações.
                    </Underscore>
                  </li>
                  <li className=" w-full list-disc">
                    <Underscore
                      lineBold="sm"
                      fullLine={true}
                      bgTailwind="bg-red-600"
                    >
                      Timer para controle de tempo. Criação de mapas mentais.
                    </Underscore>
                  </li>
                  <li className=" w-full list-disc">
                    <Underscore
                      lineBold="sm"
                      fullLine={true}
                      bgTailwind="bg-red-600"
                      className="w-full"
                    >
                      Integração com plataformas como Google Drive, Dropbox,
                      entre outras.
                    </Underscore>
                  </li>
                  <li className="w-full list-disc">
                    <Underscore
                      lineBold="sm"
                      fullLine={true}
                      bgTailwind="bg-red-600"
                    >
                      Salva o seu progresso em suas anotações e permite a edição
                      de suas anotações da
                    </Underscore>

                    <Underscore
                      lineBold="sm"
                      fullLine={true}
                      bgTailwind="bg-red-600"
                    >
                      forma que preferir.
                    </Underscore>
                  </li>
                </ul>
              </p>
            ) : (
              ""
            )}
          </div>
          <Image
            onClick={() => (copybook ? setCopybook(false) : setCopybook(true))}
            priority={true}
            fetchPriority="high"
            className={` hover:cursor-pointer md:animate-[fadeIn_400ms_ease-in-out] p-0 w-80 h-96 ${
              copybook ? "md:animate-[pulse_450ms_ease-in] absolute left-0" : ""
            }`}
            alt="Livro de anotações"
            src={book}
          />
        </div>

        <OpenFormMobile />
      </div>

      <div className="w-full h-full opacity-0 hidden invisible	bg-backgroundGradient md:w-3/4 md:opacity-100 md:visible md:flex items-center justify-center p-2 md:p-4">
        <Form />
      </div>
    </main>
  );
}
