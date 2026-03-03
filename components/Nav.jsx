import Link from 'next/link';

export default function Nav({ active }) {
  const linkClass = (page) =>
    `transition-colors duration-150 ${
      active === page
        ? 'text-riverRed'
        : 'text-gray-400 hover:text-white'
    }`;

  return (
    <>
      {/* Top bar — desktop only */}
      <div className="hidden md:block bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
            Agentic AI — Research &amp; Analysis
          </span>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-gray-500">
            <span>riverthink.com</span>
            <span className="text-riverRed">|</span>
            <span>riverthink.ai</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/riverthink-logo.png"
              alt="Riverthink"
              className="h-7 w-auto brightness-0 invert"
            />
          </Link>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link href="/" className={linkClass('home')}>Home</Link>
            <Link href="/about" className={linkClass('about')}>About</Link>
            <Link href="/blog" className={linkClass('blog')}>Blog</Link>
            <a
              href="https://labs.riverthink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-150"
            >
              Labs
            </a>
            <a
              href="https://github.com/riverthink?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-150"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/dvFqe2Avv7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-150"
            >
              Discord
            </a>
          </nav>

          {/* CTA */}
          <Link
            href="/blog"
            className="hidden md:inline-block bg-riverRed text-white text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 hover:bg-red-700 transition-colors duration-150"
          >
            Read Blog →
          </Link>

          {/* Mobile — simple links */}
          <nav className="flex md:hidden items-center gap-5 text-xs font-bold uppercase tracking-wider">
            <Link href="/" className={linkClass('home')}>Home</Link>
            <Link href="/about" className={linkClass('about')}>About</Link>
            <Link href="/blog" className={linkClass('blog')}>Blog</Link>
            <a
              href="https://discord.gg/dvFqe2Avv7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-150"
            >
              Discord
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
