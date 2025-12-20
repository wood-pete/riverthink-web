import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col bg-white px-6 py-8">
      <Head>
        <title>About Riverthink</title>
        <meta
          name="description"
          content="Learn what powers Riverthink and how we shape ideas into momentum."
        />
      </Head>

      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-4 text-sm font-semibold text-slate-800">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        <a
          href="https://labs.riverthink.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-600 transition-colors hover:text-slate-800"
        >
          labs.riverthink.com
        </a>
      </header>

      <main className="flex flex-1 flex-col">
        <div className="pt-12">
          <h1 className="text-3xl font-bold text-slate-800">About Riverthink</h1>
          <p className="mt-4 text-lg text-slate-600">
            Riverthink is a space for ideas to flow, clarify, and turn into momentum. This
            simple sample app shows how to structure a two-page React experience with a clean
            Tailwind-powered layout.
          </p>
          <div className="mt-8 grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Built for the web</h2>
              <p className="mt-2 text-slate-600">
                Pre-rendered static pages mean fast performance, easy hosting on GitHub Pages,
                and search engines that can crawl every word.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Styled with Tailwind CSS</h2>
              <p className="mt-2 text-slate-600">
                Utility classes keep the styling lean, consistent, and easy to adjust without
                leaving the component files.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
