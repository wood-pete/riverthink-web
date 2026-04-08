import Link from 'next/link';
import { useState } from 'react';

export default function Nav({ active }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = (page) =>
    `transition-colors duration-150 ${
      active === page
        ? 'text-riverRed'
        : 'text-gray-400 hover:text-white'
    }`;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top bar — desktop only */}
      <div className="hidden md:block bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
            Agentic Intelligence — Research &amp; Analysis
          </span>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-gray-500">
            <span>riverthink.com</span>
            <span className="text-riverRed">|</span>
            <span>riverthink.ai</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/new_logo_riverthink.jpg"
              alt="Riverthink"
              className="h-7 w-auto"
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
            <a
              href="https://riverthink.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-150"
            >
              Substack
            </a>
          </nav>

          {/* CTA */}
          <Link
            href="/blog"
            className="hidden md:inline-block bg-riverRed text-white text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 hover:bg-red-700 transition-colors duration-150"
          >
            Read Blog →
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 border border-white/20 text-gray-200 hover:text-white hover:border-white/40 transition-colors duration-150"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-sm">
            <div className="px-6 py-5 flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.2em]">
              <Link href="/" className={linkClass('home')} onClick={closeMobileMenu}>
                Home
              </Link>
              <Link href="/about" className={linkClass('about')} onClick={closeMobileMenu}>
                About
              </Link>
              <Link href="/blog" className={linkClass('blog')} onClick={closeMobileMenu}>
                Blog
              </Link>
              <a
                href="https://labs.riverthink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-150"
                onClick={closeMobileMenu}
              >
                Labs
              </a>
              <a
                href="https://github.com/riverthink?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-150"
                onClick={closeMobileMenu}
              >
                GitHub
              </a>
              <a
                href="https://discord.gg/dvFqe2Avv7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-150"
                onClick={closeMobileMenu}
              >
                Discord
              </a>
              <a
                href="https://riverthink.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-150"
                onClick={closeMobileMenu}
              >
                Substack
              </a>
              <Link
                href="/blog"
                className="mt-2 inline-flex items-center justify-center bg-riverRed text-white text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-3 hover:bg-red-700 transition-colors duration-150"
                onClick={closeMobileMenu}
              >
                Read Blog →
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
