import BgPerfil from '@/components/BgPerfil';
import PerfilForm from '@/components/Forms/PerfilForm';
import GlassBox from '@/components/GlassBox';

export default function Perfil() {
  return (
    <main className='w-full min-h-screen h-auto flex flex-col items-center justify-center'>
      <BgPerfil>
        <GlassBox>
          <PerfilForm />
        </GlassBox>
      </BgPerfil>
    </main>
  );
}
