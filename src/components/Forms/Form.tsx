import { Modal } from "../Modal";

interface FormProps{
  className?:string
}

export function Form({className}:FormProps) {
    return (
      <form
        action="submit"
        className={`bg-gray-100 p-4 ${className} max-w-md flex flex-col items-center rounded-md gap-3 animate-[fadeIn_300ms_ease-in-out]`}
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
        <Modal />

        <div className="my-1">
          <label className="flex items-center gap-1 justify-center">
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
    );
}