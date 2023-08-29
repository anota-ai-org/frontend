type GlassBoxProps = {
  children: React.ReactNode;
};

export default function GlassBox({ children }: GlassBoxProps) {
  return (
    <section className="max-w-[38rem] w-full h-auto bg-whiteOpacity z-10 rounded-[3rem] py-3 lg:py-10 px-5 flex flex-col items-center justify-center shadow-defaultShadow">
      {children}
    </section>
  );
}
