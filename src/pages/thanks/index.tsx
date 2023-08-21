import Image from 'next/image'
import bgThanks from '../../assets/bg-thanks.png'
export default function Thanks() {
    return (
      <div className="relative">
        <div className=" bg-backgroundGradient h-full w-full opacity-80 flex flex-col justify-center items-center p-4 z-10 fixed inset-0">
          <h1 className="text-4xl font-bold text-white">Muito obrigado!</h1>
          <p className='max-w-2xl md:text-3xl rounded-3xl mt-20 text-center  bg-black bg-opacity-100 leading-10 text-white p-4'>
            Agradecemos muito pelo seu interesse em nosso aplicativo! Seu
            interesse e sua opinião sobre o que esperar de uma nova ferramenta
            digital para auxiliar em suas anotações é muito importante para
            nossos próximos passos e também, para que possamos entregar a melhor
            experiência para você quando lançarmos nosso produto! ;)
          </p>
        </div>
        <div className="fixed inset-0 z-0">
          <Image
            src={bgThanks}
            alt="background"
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
}