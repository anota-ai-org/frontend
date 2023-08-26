type GlassBoxProps = {
  children: React.ReactNode;
};

export default function GlassBox({ children }: GlassBoxProps) {
  return (
    <section className="max-w-[604px] w-full h-[681px] max-h-full bg-whiteOpacity z-10 rounded-[45px] py-10 px-5 flex flex-col items-center justify-center shadow-defaultShadow">
      {children}
    </section>
  );
}
