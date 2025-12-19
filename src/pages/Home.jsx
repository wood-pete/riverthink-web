export default function Home() {
  const logoSrc = 'riverthink-logo.png';

  return (
    <div className="flex min-h-screen items-center justify-center">
      <img
        src={logoSrc}
        alt="Riverthink logo"
        className="w-[520px] max-w-[95vw] h-auto drop-shadow-sm object-contain"
      />
    </div>
  );
}
