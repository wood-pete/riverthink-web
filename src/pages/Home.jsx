export default function Home() {
  const logoSrc = 'riverthink-logo.png';

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-0.5">
        <img
          src={logoSrc}
          alt="Riverthink logo"
          className="w-[520px] max-w-[95vw] h-auto object-contain"
        />
        <a
          href="https://labs.riverthink.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-600 hover:text-slate-800 transition-colors"
        >
          labs.riverthink.com
        </a>
      </div>
    </div>
  );
}
