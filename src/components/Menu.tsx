"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Logo from "../assets/logo-menu.png";
import MenuButton from "./MenuButton";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`max-w-[320px] z-50 w-3/4 md:w-3/4 lg:w-[230px] xl:w-full h-screen fixed top-0 p-5 bg-menuBg shadow-menuShadow flex-col lg:left-0
      ${isOpen ? "left-0" : "left-[-320px]"}
    `}
    >
      <MenuButton isOpen={isOpen} handleClick={handleClickMenu} />

      <Link href="/">
        <Image
          src={Logo}
          alt=""
          priority={true}
          quality={100}
          fetchPriority="high"
          className="object-cover w-full mt-5 lg:mt-0"
          sizes="100%"
          width={0}
          height={0}
        />
      </Link>

      <nav className="w-full text-white">
        <ul className=" flex flex-col gap-5">
          <li className="border-b-2 py-1 border-white">
            <Link href="/" className="">
              Configurações da conta
            </Link>
          </li>
          <li className="border-b-2 py-1 border-white">
            <Link href="/perfil">Perfil</Link>
          </li>
          <li className="border-b-2 py-1 border-white">
            <Link href="/">Dispositivos</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
