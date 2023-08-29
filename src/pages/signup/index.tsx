import Image from "next/image";

import BgLoginSignUp from "@/components/BgLoginSignUp";
import GlassBox from "@/components/GlassBox";
import SignupForm from '@/components/Forms/SignupForm';

import logoAnotai from "../../assets/logo_name.svg";

export default function Signup() {
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

        <SignupForm />

      </GlassBox>
    </BgLoginSignUp>
  );
}
