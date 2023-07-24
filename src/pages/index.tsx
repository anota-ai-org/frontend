import Image from "next/image";

import Logo from "../assets/anotai-logo.svg";
import Hero from "../assets/note-hero.svg";
import { Underscore } from "@/components/Underscore";
import { Form } from "@/components/Forms/Form";
import { OpenFormMobile } from "@/components/Forms/OpenFormMobile";

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
          Lorem ipsum dolor sit amet consectetur.{" "}
          <Underscore className="font-bold">
            liquet dui facilisis bibendum
          </Underscore>{" "}
          eget convallis tempus suspendisse lectus sodales. Sed odio id morbi
          non. Massa aliquet imperdiet massa eget ac enim et accumsan. Neque
          cursus augue ut a auctor in maecenas ipsum. Netus dui pretium aliquam
          arcu egestas rutrum libero faucibus varius. Quam amet massa eu
          elementum nunc.
        </p>
        <Image
          priority={true}
          fetchPriority="high"
          className="object-contain p-4 animate-[fadeIn_400ms_ease-in-out]"
          alt="Uma pessoa fazendo anotações"
          src={Hero}
        />
      <OpenFormMobile/>
      </div>
      <div className="w-full h-full opacity-0 hidden invisible	bg-backgroundGradient md:opacity-100 md:visible md:flex items-center justify-center p-2 md:p-4">
        <Form/>
      </div>
    </main>
  );
}
