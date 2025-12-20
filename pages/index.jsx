import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const logoSrc = '/riverthink-logo.png';

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Head>
        <title>Riverthink</title>
        <meta
          name="description"
          content="Riverthink is a space for ideas to flow, clarify, and turn into momentum."
        />
      </Head>

      <header className="flex items-center justify-end px-6 py-4">
        <nav className="flex items-center gap-4 text-sm font-semibold text-slate-800">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <main className="flex flex-1 items-center justify-center px-6">
        <div className="flex flex-col items-center gap-1">
          <img
            src={logoSrc}
            alt="Riverthink logo"
            className="h-auto w-[520px] max-w-[95vw] object-contain"
          />
          <a
            href="https://labs.riverthink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 transition-colors hover:text-slate-800"
          >
            labs.riverthink.com
          </a>
        </div>
      </main>
    </div>
  );
}
