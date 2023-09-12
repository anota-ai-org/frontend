import Image from "next/image";
import UserIcon from "../../assets/icons/user.svg";
import LockIcon from "../../assets/icons/lock.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";
import { useEffect } from "react";




export default function SignupForm() {
  const formSchema = z.object({
    name: z
      .string()
      .min(3, "O nome deve conter no mínimo 3 caracteres")
      .refine((name) => name.trim().length > 0, {
        message: "O nome deve ter pelo menos 3 caracteres",
      }),
    email: z
      .string()
      .email({ message: "Insira um email valído para continuar" }),
    password: z
      .string()
      .min(3)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
  });

  type typeFormSignup = z.infer<typeof formSchema>

  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<typeFormSignup>({
    resolver: zodResolver(formSchema),
  });

  function handleRegistration(data:typeFormSignup) {
    console.log(data);
}

  const { email, password } = watch()
  
  useEffect(() => { console.log(email, password) })
  return (
    <form
      onSubmit={handleSubmit(handleRegistration)}
      action="submit"
      className="w-full flex flex-col items-center justify-center px-2 font-inter gap-2 portrait:gap-4 md:gap-4 m-4"
    >
      <label className={`flex flex-col gap-1 w-full items-center `}>
        <div className="w-full h-9 md:h-12 relative flex items-center justify-center max-w-[410px]">
          <Image
            src={UserIcon}
            alt="user icon"
            priority={true}
            quality={100}
            fetchPriority="high"
            width={21}
            height={21}
            className={`absolute left-3 md:w-[26px] md:h-[26px] ${
              email?.length < 1 ? "brightness-0" : ""
            }`}
          />

          <input
            {...register("email")}
            className="rounded-md h-9 md:h-12 flex items-center justify-center w-full p-[10px_16px_10px_44px] text-sm md:text-lg shadow-defaultShadow "
            placeholder="Endereço de email/Usuário"
          />
        </div>
        {errors.email?.message ? (
          <FormError>{errors.email.message}</FormError>
        ) : (
          ""
        )}
      </label>
      <label className={`flex flex-col gap-1 w-full items-center `}>
        <div className="w-full h-9 md:h-12 relative flex items-center justify-center max-w-[410px]">
          <Image
            src={LockIcon}
            alt="user icon"
            priority={true}
            quality={100}
            fetchPriority="high"
            width={15}
            height={21}
            className={`absolute left-3 md:w-[20px] md:h-[26px] ${
              password?.length < 1 ? "brightness-0" : ""
            } `}
          />
          <input
            {...register("password")}
            className="rounded-md h-9 md:h-12 flex items-center justify-center w-full p-[10px_16px_10px_44px] text-sm md:text-lg shadow-defaultShadow "
            placeholder="Senha"
          />
        </div>
      </label>
      <p
        className={`font-roboto text-sm portrait:text-base md:text-base text-black text-center max-w-[30ch] portrait:my-6 md:my-6 ${
          errors.password?.message
            ? "text-red-600 animate-[fadeIn_400ms_ease-in-out]"
            : ""
        }`}
      >
        Uma senha forte tem pelo menos 8 caracteres e inclui letras maiúsculas e
        minúsculas, números e símbolos.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full relative h-9 md:h-12 rounded-md text-sm md:text-lg font-semibold max-w-[410px] disabled:bg-gray-300 
          disabled:text-white hover:brightness-90 disabled:cursor-not-allowed
        bg-white`}
      >
        Continuar
      </button>
    </form>
  );
}
