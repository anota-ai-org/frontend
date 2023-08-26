import { z } from "zod";
import { Modal } from "../Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";
import { api } from "@/api/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/router";


export function Form() {
const {push} = useRouter();
  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter pelo menos 3 caracteres" })
      .refine((name) => name.trim().length > 0, {
        message: "O nome deve ter pelo menos 3 caracteres",
      }),
    email: z.string().email({ message: "Email inválido" }),
    opinion: z
      .string().nullable(),
    checkTermsAndConditions: z.boolean().refine((check) => check, {
      message: "É necessário aceitar os termos e condições para continuar",
    }),
  });

  type formType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  async function handleData({
    name,
    email,
    checkTermsAndConditions,
    opinion,
  }: formType) {
    try {

        await api.post("/addRow", {
          name: name,
          email: email,
          message: opinion,
        });

      reset()
      push("/thanks")
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message);
        return;
      }
      return console.error(err);
    }
  }
  return (
    <form
      onSubmit={handleSubmit(handleData)}
      action="submit"
      className="rad bg-gray-100 p-4 max-w-md flex flex-col items-center rounded-md gap-3 animate-[fadeIn_300ms_ease-in-out]"
    >
      <h4 className="text-2xl font-bold">CADASTRO</h4>
      <div className="w-full flex flex-col gap-3 mt-3">
        <label className="flex w-full flex-col gap-1">
          <strong>Nome*</strong>
          <input
            {...register("name")}
            type="text"
            placeholder="Insira seu nome"
            className={`p-2 rounded-md ${
              errors.name ? "border-red-600 border-2 border-solid" : ""
            }`}
          />
          {errors.name ? <FormError>{errors.name.message}</FormError> : ""}
        </label>

        <label className="flex w-full flex-col gap-1">
          <strong>E-mail*</strong>
          <input
            {...register("email")}
            type="email"
            placeholder="Insira seu e-mail"
            className={`p-2 rounded-md ${
              errors.email ? "border-red-600 border-2 border-solid" : ""
            }`}
          />
          {errors.email ? <FormError>{errors.email.message}</FormError> : ""}
        </label>
        <label className="flex w-full flex-col gap-1">
          <strong>O que não pode faltar no seu app de estudos?</strong>
          <textarea
            {...register("opinion")}
            placeholder="Nos dê sua opinião"
            className={`p-2 rounded-md resize-none h-36 ${
              errors.opinion?.message
                ? "border-red-600 border-2 border-solid"
                : ""
            }`}
          />
          {errors.opinion?.message ? (
            <FormError>{errors.opinion.message}</FormError>
          ) : (
            ""
          )}
        </label>
      </div>
      <Modal />

      <div className="my-1">
        <label className="flex items-center gap-1 justify-center">
          <input
            type="checkbox"
            {...register("checkTermsAndConditions")}
            className={`p-2 rounded-md ${
              errors.checkTermsAndConditions?.message
                ? "border-red-600 border-2 border-solid"
                : ""
            }`}
          />
          <span> Aceito os termos e condições</span>
        </label>
        {errors.checkTermsAndConditions?.message ? (
          <FormError>{errors.checkTermsAndConditions.message}</FormError>
        ) : (
          ""
        )}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className={` hover:scale-105 transition-transform p-2 rounded-md font-bold text-white ${
          isSubmitting ? "bg-gray-300" : "bg-backgroundGradient"}`}
      >
        Enviar formulário
      </button>
    </form>
  );
}
