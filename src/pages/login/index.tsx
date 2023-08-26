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
          className="md:max-w-[355] md:max-h-[162] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] portrait:mb-5 md:mb-8"
        />

        <LoginForm />

        <span className="font-roboto text-center text-sm portrait:text-base md:text-base my-2 md:my-5 portrait:my-4 portrait:mb-7 md:mb-7">
          Esqueceu sua senha?{" "}
          <Link href="/forgot" className="underline font-bold">
            Clique Aqui
          </Link>
        </span>

        <span className="font-roboto text-center text-sm portrait:text-lg md:text-[22px]">
          Ainda não possuí conta?
          <Link href="/signup" className="underline font-bold block">
            Clique Aqui
          </Link>
        </span>
      </GlassBox>
    </BgLoginSignUp>
  );
}
