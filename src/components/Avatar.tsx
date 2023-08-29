"use client";

import Image from "next/image";
import { useState, useRef } from "react";

import avatarIcon from "../assets/icons/avatar.svg";
import plusIcon from "../assets/icons/plus.svg";

export default function Avatar() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInput.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageSrc = event.target.files?.[0];
    if (imageSrc) {
      setAvatar(imageSrc);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center mb-14">
      <label
        onClick={handleImageClick}
        className="max-w-[130px] max-h-[130px] w-[90px] h-[90px] md:w-[130px] md:h-[130px] flex items-center justify-center rounded-full bg-white p-1 shadow-defaultShadow relative"
      >
        <input
          type="file"
          className="hidden"
          ref={fileInput}
          onChange={handleImageChange}
        />
        {avatar ? (
          <Image
            src={URL.createObjectURL(avatar)}
            alt="avatar"
            priority={true}
            quality={100}
            fetchPriority="high"
            className="object-cover w-full h-full rounded-full"
            sizes="100%"
            width={0}
            height={0}
          />
        ) : (
          <Image
            src={avatarIcon}
            alt="avatar"
            priority={true}
            quality={100}
            fetchPriority="high"
            width={50}
            height={50}
            className="md:w-[70px] md:h-[70px] object-cover"
          />
        )}

        <div className="absolute -bottom-[15%] right-[10%]">
          <div className="w-[38px] h-[38px] md:w-[48px] md:h-[48px] p-1 md:p-3 rounded-full bg-white shadow-defaultShadow flex items-center justify-center">
            <Image
              src={plusIcon}
              alt="avatar"
              priority={true}
              quality={100}
              fetchPriority="high"
              width={20}
              height={20}
              className="md:w-[24px] md:h-[24px] object-cover start-1"
            />
          </div>
          <p
            className="absolute w-[20ch] -bottom-[120%] left-[120%] text-[10px] md:text-sm text-black"
          >
            O arquivo deve ser em formato JPG ou PNG, com resolução máxima de
            500x500.
          </p>
        </div>
      </label>
    </div>
  );
}
