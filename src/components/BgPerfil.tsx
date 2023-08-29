import Image from 'next/image';
import bgPerfil from '../assets/bg-perfil.png'

type BgPerfilProps = {
  children: React.ReactNode;
}

export default function BgPerfil({children}: BgPerfilProps) {
  return (
    <div className='w-screen min-h-screen h-full relative flex items-center justify-center py-5 px-5
    '>
      <Image
        src={bgPerfil}
        alt="biblioteca"
        priority={true}
        quality={100}
        fetchPriority="high"
        className="absolute -z-20 right-0 top-0 w-full md:w-[50%] h-full mix-blend-luminosity bg-lightgray-[50%] object-cover"
      />
      <div className="absolute -z-10 w-full h-full bg-backgroundGradientPerfil"></div>
      {children}
    </div>
  );
}
