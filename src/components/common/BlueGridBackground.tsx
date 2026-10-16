export default function BlueGridBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-persian-blue-800">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative z-10 flex justify-center items-center">
        {children}
      </div>
    </section>
  );
}
