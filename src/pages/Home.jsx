export default function Home() {
  const logoSrc = `${import.meta.env.BASE_URL}riverthink-logo.png`;

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
