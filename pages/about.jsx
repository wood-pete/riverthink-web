import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const TOPICS = [
  [
    'Agent Orchestration',
    'Multi-agent systems, task decomposition, control flow, and the BMW levels of agentic maturity — from prompt chaining to policy-as-code.',
  ],
  [
    'MCP & A2A Protocols',
    'The emerging standards for tool access and agent-to-agent communication: Model Context Protocol and Agent-to-Agent in production.',
  ],
  [
    'Security & Governance',
    'OWASP frameworks, prompt injection defence, supply chain risks, and the compliance-ready architectures that enterprise deployments demand.',
  ],
  [
    'Data Platforms',
    'Modern data architecture for AI-era organisations — lakehouses, semantic layers, and the memory, state, and knowledge stores that autonomous systems actually need.',
  ],
  [
    'Healthcare AI',
    'Real-world application of agentic patterns in clinical and operational settings, with genuine governance constraints and patient-flow stakes.',
  ],
  [
    'Digital Workforce',
    'As specialist agents take on coordination, execution, and escalation, the nature of knowledge work transforms. What that means for teams, roles, and strategy.',
  ],
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Head>
        <title>About — Riverthink</title>
        <meta
          name="description"
          content="Riverthink covers data platforms and agentic intelligence — practical analysis of modern data architecture, orchestration patterns, governance, and the infrastructure of autonomous work."
        />
      </Head>

      <Nav active="about" />

      {/* ── Page Hero ── */}
      <section className="bg-black py-20 px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-riverRed" />
        <div className="max-w-7xl mx-auto">
          <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-5">
            Data Platforms &nbsp;·&nbsp; Agentic Intelligence
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-black uppercase text-white leading-[0.9]">
            Thinking
            <br />
            at the Edge
          </h1>
        </div>
      </section>

      {/* ── What is Riverthink ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-8 h-0.5 bg-riverRed mb-8" />
            <h2 className="font-display text-4xl font-black uppercase text-white mb-8">
              What is Riverthink?
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Riverthink is a space for ideas to flow, clarify, and turn into momentum. It
                covers two converging disciplines: data platforms and agentic intelligence. The first is
                about how organisations store, move, and make sense of data at scale. The second
                is about what happens when AI systems start acting on it autonomously.
              </p>
              <p>
                The name reflects a philosophy. Ideas should move like water — finding the path,
                building pressure, creating change. Not stagnant. Not theoretical. In motion.
              </p>
              <p>
                You&apos;ll find analysis here that goes beyond the hype — grounded in real
                implementation experience across healthcare, finance, and enterprise technology.
              </p>
            </div>
          </div>

          <div>
            <div className="w-8 h-0.5 bg-riverRed mb-8" />
            <h2 className="font-display text-4xl font-black uppercase text-white mb-8">
              What We Cover
            </h2>
            <div className="space-y-5">
              {TOPICS.map(([title, desc]) => (
                <div
                  key={title}
                  className="border-l-2 border-riverRed/30 pl-5 hover:border-riverRed transition-colors duration-200"
                >
                  <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Author ── */}
      <section className="bg-[#111111] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-14">
            The Author
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="overflow-hidden aspect-square">
                <img
                  src="/blog/pwood.PNG"
                  alt="Peter Wood"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-white mb-8 leading-none">
                Peter Wood
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed mb-10">
                <p>
                  Peter Wood is a healthcare technology leader specialising in data platforms,
                  operational intelligence, and agent-driven automation. He has led large-scale
                  digital transformation programmes with major hospital groups and global
                  technology partners.
                </p>
                <p>
                  His work translates advanced analytics and AI into measurable improvements in
                  clinical operations, capacity management, and patient flow. Peter brings a
                  practitioner&apos;s perspective to agentic intelligence — grounded in the governance,
                  integration, and data challenges that enterprises actually face.
                </p>
                <p>
                  Riverthink is where those ideas find structure, language, and a path forward.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/blog"
                  className="bg-riverRed text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 hover:bg-red-700 transition-colors duration-150"
                >
                  Read the Blog →
                </Link>
                <a
                  href="https://github.com/riverthink?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-150"
                >
                  GitHub →
                </a>
                <a
                  href="https://labs.riverthink.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-150"
                >
                  Labs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Built on ── */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Unconventional Thinking',
              body: 'Riverthink is designed as a calm, open space for unconventional ideas about data and AI. It is a place to test assumptions, challenge defaults, and explore better paths forward.',
            },
            {
              title: 'Open by Default',
              body: 'The source for this site is available on GitHub. Ideas should be in the open — not behind paywalls. Explore, fork, and build on it.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#111111] p-8 group">
              <div className="w-8 h-0.5 bg-riverRed mb-5 group-hover:w-14 transition-all duration-300" />
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
