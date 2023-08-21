import * as Dialog from "@radix-ui/react-dialog";
import { Underscore } from "./Underscore";
export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <Underscore className="hover:scale-105 transition-transform">
            <span className="hover:cursor-pointer animate-bounce hover:animate-none hover:font-semibold hover:scale-105 transition-transform bg-clip-text text-transparent bg-backgroundGradient">
              Termos e condições
            </span>
          </Underscore>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-80 fixed inset-0 animate-overlayShow" />
        <Dialog.Content className="inline-flex text-sm p-2 md:p-4 overflow-auto md:min-w-max md:bg-transparent inset-0 fixed ">
          <div className="bg-gray-50 m-auto md:max-w-3xl p-4 rounded-lg flex flex-col items-center gap-4 animate-contentShow">
            <h1 className="text-4xl text-center">Termos e condições</h1>
            <h3>
              <Underscore className="text-sm">
                <strong>TERMOS DE USO E RESPONSABILIDADE</strong>
              </Underscore>
            </h3>
            <p className="md:text-xl text-sm text-left mt-3 leading-8 animate-fadeIn">
              <strong>
                1.Introdução Estes Termos de Uso e Responsabilidade
              </strong>
              <br />
              (&quot;Termos&quot;) regulam o acesso e uso do site e aplicativo
              (&quot;Anotaí&quot;) oferecidos por Sou Júnior Lab. Ao acessar ou
              usar a Plataforma, você concorda em cumprir e estar vinculado a
              estes Termos. Se você não concorda com estes Termos, por favor,
              não utilize a Plataforma.
              <br />
              <strong>2. Uso da Plataforma</strong>
              <br />
              2.1. Ao utilizar a Plataforma, você concorda em: (a) Fornecer
              informações precisas e completas ao se cadastrar ou usar a
              Plataforma; (b) Manter a confidencialidade de suas credenciais de
              acesso; (c) Cumprir todas as leis e regulamentos aplicáveis ao
              usar a Plataforma; (d) Não interferir na operação normal da
              Plataforma, incluindo a transmissão de vírus ou código malicioso;
              (e) Não utilizar a Plataforma para atividades ilegais,
              fraudulentas, difamatórias, prejudiciais ou abusivas.
              <br />
              <strong>3. Conteúdo da Plataforma</strong>
              <br />
              3.1. A Empresa pode disponibilizar conteúdo, como textos, imagens
              e mídia, na Plataforma. Esse conteúdo é fornecido apenas para fins
              informativos e não constitui aconselhamento profissional.
              <br />
              3.2. Você concorda em não copiar, reproduzir, distribuir,
              transmitir, exibir, vender, licenciar ou explorar qualquer
              conteúdo da Plataforma para fins comerciais sem autorização prévia
              por escrito da Empresa.
              <br />
              <strong>4. Propriedade Intelectual</strong>
              <br />
              Todos os direitos de propriedade intelectual relacionados à
              Plataforma e seu conteúdo são de propriedade exclusiva da Empresa.
              Você concorda em não usar, reproduzir ou distribuir qualquer parte
              da Plataforma sem autorização prévia por escrito da Empresa.
              <br />
              <strong>5. Limitação de Responsabilidade </strong>
              <br />
              5.1. A Empresa não se responsabiliza por danos diretos, indiretos,
              incidentais, consequenciais, especiais ou punitivos decorrentes do
              uso ou incapacidade de uso da Plataforma.
              <strong>6. Modificações e Suspensão</strong>
              <br />A Empresa se reserva o direito de modificar, suspender ou
              encerrar a Plataforma a qualquer momento, sem aviso prévio.
              <strong>7. Disposições Gerais</strong>
              <br />
              7.1. Estes Termos constituem o acordo completo entre você e a
              Empresa em relação ao uso da Plataforma. Ao usar a Plataforma,
              você concorda integralmente com estes Termos de Uso e
              Responsabilidade. Se você não concorda com estes Termos, por
              favor, não utilize a Plataforma.
            </p>

            <Dialog.Close asChild>
              <button className="bg-backgroundGradient p-2 rounded-md text-white font-bold">
                Fechar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
