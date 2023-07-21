import Image from "next/image";

import Logo from "../assets/anotai-logo.svg";
import Hero from "../assets/note-hero.svg";
import { Underscore } from "@/components/Underscore";

export default function Home() {
  return (
    <main className="w-full h-full text-gray-900 flex flex-col md:flex-row">
      <div className=" flex items-center flex-col p-4 text-center justify-center">
        <h1 className="flex text-4xl items-center gap-1 font-bold mt-3 animate-[fadeIn_200ms_ease-in-out]">
          <Image
            className="w-9 h-9"
            alt="Letra A representando logotipo da marca"
            src={Logo}
          />
          <span>Anotai</span>
        </h1>
        <p className="text-xl mt-3 leading-8 animate-fadeIn">
          Lorem ipsum dolor sit amet consectetur. <Underscore>liquet dui facilisis bibendum</Underscore> 
          {" "}eget convallis tempus suspendisse lectus sodales. Sed odio id morbi
          non. Massa aliquet imperdiet massa eget ac enim et accumsan. Neque
          cursus augue ut a auctor in maecenas ipsum. Netus dui pretium aliquam
          arcu egestas rutrum libero faucibus varius. Quam amet massa eu
          elementum nunc.
        </p>
        <Image
        className="object-contain p-4 animate-[fadeIn_400ms_ease-in-out]"
         alt="Uma pessoa fazendo anotações"
          src={Hero}
        />
      </div>
      <div className="w-full h-full	bg-backgroundGradient flex items-center justify-center p-2 md:p-4">
        <form
          action="submit"
          className="bg-gray-100 p-4 max-w-md flex flex-col items-center rounded-md gap-3 animate-[fadeIn_300ms_ease-in-out]"
        >
          <h4 className="text-2xl font-bold">CADASTRO</h4>
          <div className="w-full flex flex-col gap-3 mt-3">
            <label className="flex w-full flex-col gap-1">
              <strong>Nome*</strong>
              <input
                type="text"
                placeholder="Insira seu nome"
                name=""
                id=""
                className="p-2 rounded-md"
              />
            </label>

            <label className="flex w-full flex-col gap-1">
              <strong>E-mail*</strong>
              <input
                type="email"
                placeholder="Insira seu e-mail"
                name=""
                id=""
                className="p-2 rounded-md"
              />
            </label>
            <label className="flex w-full flex-col gap-1">
              <strong>O que não pode faltar no seu app de estudos?</strong>
              <textarea
                placeholder="Nos de sua opinião"
                className="p-2 rounded-md resize-none h-36"
              />
            </label>
          </div>
          <strong>
            <span className="hover:cursor-pointer">Termos e condições</span>
          </strong>
          <div>
            <label className="flex items-center gap-1">
              <input type="checkbox" />
              <span> Aceito os termos e condições</span>
            </label>
          </div>
          <button
            type="button"
            className="bg-backgroundGradient hover:scale-105 transition-transform p-2 rounded-md font-bold text-white"
          >
            Enviar formulário
          </button>
        </form>
      </div>
    </main>
  );
}
