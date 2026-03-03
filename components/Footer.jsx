import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
        {/* Brand */}
        <div className="md:col-span-5">
          <img
            src="/riverthink-logo.png"
            alt="Riverthink"
            className="h-8 w-auto brightness-0 invert mb-5"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A space for ideas at the frontier of agentic AI — where autonomous systems,
            orchestration patterns, and governance converge into practical insight.
          </p>
          <div className="flex items-center gap-3 mt-6 text-[11px] uppercase tracking-widest text-gray-600">
            <span>riverthink.com</span>
            <span className="text-riverRed">|</span>
            <span>riverthink.ai</span>
          </div>
        </div>

        {/* Navigate */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-5">
            Navigate
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-150">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-150">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors duration-150">
                Blog
              </Link>
            </li>
            <li>
              <a
                href="https://labs.riverthink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-150"
              >
                Labs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/riverthink?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-150"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/dvFqe2Avv7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-150"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>

        {/* Topics */}
        <div className="md:col-span-3">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white mb-5">
            Topics
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Agent Orchestration</li>
            <li>Security &amp; Governance</li>
            <li>MCP &amp; A2A Protocols</li>
            <li>Agent Data Architecture</li>
            <li>Healthcare AI</li>
            <li>Digital Workforce</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-gray-600 uppercase tracking-widest">
        <span>© 2026 Riverthink. All rights reserved.</span>
        <span>Thinking at the Edge</span>
      </div>
    </footer>
  );
}
