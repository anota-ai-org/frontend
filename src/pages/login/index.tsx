import Image from "next/image";

import BgLoginSignUp from "@/components/BgLoginSignUp";
import GlassBox from "@/components/GlassBox";

import logoAnotai from "../../assets/logo_name.svg";
import LoginForm from "@/components/Forms/LoginForm";

export default function Login() {
  return (
    <BgLoginSignUp>
      <GlassBox>
        <Image
          src={logoAnotai}
          alt="logo Anotai"
          priority={true}
          quality={100}
          fetchPriority="high"
          width={355}
          height={162}
          className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mb-12"
        />

        <LoginForm />

        <span className="font-roboto text-center text-base mb-7">
          Esqueceu sua senha?{" "}
          <a href="/forgot" className="underline font-bold">
            Clique Aqui
          </a>
        </span>

        <span className="font-roboto text-center text-lg md:text-[22px]">
          Ainda não possuí conta?
          <a href="/signup" className="underline font-bold block">
            Clique Aqui
          </a>
        </span>
      </GlassBox>
    </BgLoginSignUp>
  );
}
