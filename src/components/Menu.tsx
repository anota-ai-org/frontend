import Link from 'next/link';
import Image from "next/image";

import Logo from '../assets/logo_name.svg'

export default function Menu() {
  return (
    <aside className="max-w-[376px] h-screen fixed">
      <Link href='/'>
        <Image
          src={Logo}
          alt=""
          priority={true}
          quality={100}
          fetchPriority="high"
          className="object-cover w-full h-full rounded-full"
          sizes="100%"
          width={0}
          height={0}
        />
      </Link>

      <nav></nav>
    </aside>
  );
}
