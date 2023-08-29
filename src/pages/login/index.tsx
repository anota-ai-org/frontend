import Image from "next/image";
import Link from "next/link";

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
          width={305}
          height={100}
          className="md:max-w-[325] md:max-h-[122] lg:max-w-[355] lg:max-h-[162] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:mb-3"
        />

        <LoginForm />

        <span className="font-roboto text-center my-2 text-sm lg:text-base mt-4">
        <p className='inline '>Esqueceu sua senha? </p>
          <Link href="/forgot" className="underline font-bold">
            Clique Aqui
          </Link>
        </span>

        <span className="font-roboto text-center text-sm lg:my-4 lg:leading-7 lg:text-[22px]">
          <p>Ainda não possuí conta?</p>
          <Link href="/signup" className="underline font-bold block">
            Clique Aqui
          </Link>
        </span>
      </GlassBox>
    </BgLoginSignUp>
  );
}
