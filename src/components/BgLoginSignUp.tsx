import Image from 'next/image'

import bgLogin from "../assets/bg-login.jpg";

type BgLoginSignUpProps = {
  children: React.ReactNode;
}

export default function BgLoginSignUp({children} : BgLoginSignUpProps) {
  return (
    <main className='min-w-[100vw] w-full min-h-[100vh] h-full relative flex items-center justify-center py-5 px-5'>
      <Image
        src={bgLogin}
        alt="biblioteca"
        priority={true}
        quality={100}
        fetchPriority="high"
        className="absolute -z-20 left-0 top-0 w-[50%] h-full mix-blend-luminosity bg-lightgray-[50%] object-cover"
      />
      <div className="absolute -z-10 w-full h-full  bg-backgroundGradientLogin"></div>
      {children}
    </main>
  )
};
