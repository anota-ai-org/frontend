import Image from "next/image";

import openMenu from "../assets/icons/menu.svg";
import closeMenu from "../assets/icons/close.svg";

type MenuButtonProps = {
  isOpen: boolean;
  handleClick: () => void;
};

const MenuButton = ({ isOpen, handleClick }: MenuButtonProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center justify-center rounded-md border-2 border-spacing-1 fixed top-2 left-2 lg:hidden`}
      onClick={handleClick}
    >
      <Image
        src={isOpen ? closeMenu : openMenu}
        alt=""
        priority={true}
        quality={100}
        fetchPriority="high"
        className="object-cover w-full"
        sizes="100%"
        width={0}
        height={0}
      />
    </button>
  );
};

export default MenuButton;
