import Avatar from "../Avatar";

export default function PerfilForm() {
  return (
    <form
      action=""
      method=""
      className="w-full h-full flex flex-col items-center justify-center px-2 font-roboto m-5 gap-5"
    >
      <Avatar />

      <div className="w-full h-full flex flex-col justify-center max-w-sm gap-1">
        <label htmlFor="name">Nome e sobrenome</label>
        <input
          type="text"
          id="name"
          className="rounded-md h-9 md:h-10 lg:h-12 flex items-center justify-center w-full text-sm md:text-lg shadow-defaultShadow p-3"
        />
      </div>

      <div className="w-full h-full relative flex flex-col justify-center max-w-sm gap-1">
        <label htmlFor="user">@usuário</label>
        <input
          type="text"
          id="user"
          className="rounded-md h-9 md:h-10 lg:h-12 flex items-center justify-center w-full  text-sm md:text-lg shadow-defaultShadow p-3"
        />
      </div>

      <div className="w-full h-full relative flex flex-col justify-center max-w-sm gap-1">
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          className="rounded-md h-9 md:h-10 lg:h-12 flex items-center justify-center w-full  text-sm md:text-lg shadow-defaultShadow p-3"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg max-w-sm w-full h-9 md:h-10 lg:h-12 flex items-center justify-center text-sm md:text-lg shadow-defaultShadow mt-16 bg-buttonPerfil text-white"
      >
        Concluir configurações de perfil
      </button>
    </form>
  );
}
