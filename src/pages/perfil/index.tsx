import BgPerfil from '@/components/BgPerfil';
import PerfilForm from '@/components/Forms/PerfilForm';
import GlassBox from '@/components/GlassBox';
import Menu from '@/components/Menu';

export default function Perfil() {
  return (
    <main className='w-full min-h-screen h-auto flex flex-col items-center justify-center'>
      <Menu />

      <BgPerfil>
        <GlassBox>
          <PerfilForm />
        </GlassBox>
      </BgPerfil>
    </main>
  );
}
