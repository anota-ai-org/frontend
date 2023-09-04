"use client";

import Image from "next/image";
import UserIcon from "../../assets/icons/user.svg";
import LockIcon from "../../assets/icons/lock.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormError } from "./FormError";

export default function LoginForm() {
  

  
  const FormSchema = z.object({
    email: z
      .string()
      .email({ message: "Email invalído" })
      .refine((email) => email.length > 0, {
        message: "Para continuar é necessário inserir um e-mail",
      }),
    password: z
      .string()
      .min(1, { message: "È ncessário inserir uma senha para continuar" }),
  });

  type formType = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<formType>({
    resolver: zodResolver(FormSchema),
  });

  function handleLogin(data: formType) {
    console.log(data.email, data.password);
  }

const {email,password}= watch()

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full flex flex-col items-center justify-center px-2 font-inter gap-4"
    >
      <label className={`flex flex-col gap-1 w-full items-center `}>
        <div className="w-full h-9 md:h-10 lg:h-12 relative flex items-center justify-center max-w-md">
          <Image
            src={UserIcon}
            alt="user icon"
            priority={true}
            quality={100}
            fetchPriority="high"
            width={21}
            height={21}
            className={`absolute left-3 md:w-[23px] md:h-[23px] lg:w-[26px] lg:h-[26px] ${
              email ? "brightness-0" : ""
            }`}
          />
          <input
            {...register("email")}
            className={`rounded-md h-9 md:h-10 lg:h-12 flex items-center justify-center w-full p-[10px_16px_10px_44px] 
            ${errors.email ? "border-red-600 border-[2px]" : ""}
            text-sm md:text-lg shadow-defaultShadow `}
            placeholder="Endereço de email/Usuário"
          />
        </div>
        {errors.email?.message ? (
          <FormError>{errors.email.message}</FormError>
        ) : (
          ""
        )}
      </label>
      <label className={`flex flex-col gap-1 w-full items-center`}>
        <div className="w-full h-9 md:h-10 lg:h-12 relative flex items-center justify-center max-w-md">
          <Image
            src={LockIcon}
            alt="user icon"
            priority={true}
            quality={100}
            fetchPriority="high"
            width={15}
            height={21}
            className={`absolute left-3 md:w-[17px] md:h-[23px] lg:w-[20px] lg:h-[26px] ${
              password ? "brightness-0" : ""
            } `}
          />
          <input
            {...register("password")}
            className={`rounded-md h-9 md:h-10 lg:h-12 flex items-center justify-center w-full p-[10px_16px_10px_44px] 
            ${errors.email ? "border-red-600 border-[2px]" : ""}
            text-sm md:text-lg shadow-defaultShadow `}
            placeholder="Senha"
          />
        </div>
        {errors.password?.message ? (
          <FormError>{errors.password.message}</FormError>
        ) : (
          ""
        )}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full relative h-9 md:h-10 lg:h-12 rounded-md text-sm md:text-lg font-semibold max-w-md bg-white 
        text-black shadow-defaultShadow hover:brightness-90 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-white`}
      >
        Continuar
      </button>
    </form>
  );
}
