"use client";

import Image from "next/image";
import UserIcon from "../../assets/icons/user.svg";
import LockIcon from "../../assets/icons/lock.svg";
import { SetStateAction, useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (e: { target: { value: SetStateAction<string> } }) => {
    setUser(e.target.value);
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  const handleDisable = (user && password)

  return (
    <form
      action=""
      method=""
      className="w-full flex flex-col items-center justify-center px-2 gap-4 mb-4 font-inter"
    >
      <div className="w-full h-12 relative flex items-center justify-center max-w-[410px]">
        <Image
          src={UserIcon}
          alt="user icon"
          priority={true}
          quality={100}
          fetchPriority="high"
          width={26}
          height={26}
          className={`absolute left-3 ${user ? "brightness-0" : ""} `}
        />
        <input
          type="text"
          className="rounded-md h-12 flex items-center justify-center w-full p-[10px_16px_10px_44px] text-sm md:text-lg shadow-defaultShadow"
          placeholder="Endereço de email/Usuário"
          onChange={handleUser}
        />
      </div>

      <div className="w-full h-12 relative flex items-center justify-center max-w-[410px]">
        <Image
          src={LockIcon}
          alt="user icon"
          priority={true}
          quality={100}
          fetchPriority="high"
          width={20}
          height={26}
          className={`absolute left-3 ${password ? "brightness-0" : ""} `}
        />
        <input
          type="password"
          className="rounded-md h-12 flex items-center justify-center w-full p-[10px_16px_10px_44px] text-sm md:text-lg shadow-defaultShadow"
          placeholder="Senha"
          onChange={handlePassword}
        />
      </div>
      <button
        type="submit"
        disabled={!handleDisable}
        className={`w-full relative h-12 rounded-md text-sm md:text-lg font-semibold max-w-[410px] bg-white
        ${handleDisable ? 'text-black shadow-defaultShadow' : 'text-[#A3A3A3]'}`}
      >
        Continuar
      </button>
    </form>
  );
}
