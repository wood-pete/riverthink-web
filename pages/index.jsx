import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { getAllPosts } from '../lib/posts';

const FOCUS_AREAS = [
  {
    title: 'Agent Orchestration',
    desc: 'From single LLMs to multi-agent systems with role assignment, control flow, and policy-as-code governance — spanning the full levels of agentic maturity.',
  },
  {
    title: 'Security & Governance',
    desc: 'OWASP frameworks, prompt injection defence, supply chain risks, and the governance models that make autonomous systems safe to run.',
  },
  {
    title: 'MCP & A2A Protocols',
    desc: 'The emerging standards that let agents access tools and talk to each other — Model Context Protocol and Agent-to-Agent at scale.',
  },
  {
    title: 'Data Platforms',
    desc: 'Modern data architecture for AI-era organisations — from lakehouses and semantic layers to memory, state, and knowledge stores designed for agents, not dashboards.',
  },
  {
    title: 'Healthcare AI',
    desc: 'Applying agentic patterns to clinical operations, capacity management, and patient flow. Real constraints, real governance.',
  },
  {
    title: 'Digital Workforce',
    desc: 'As specialist agents take on coordination and execution, the nature of knowledge work transforms. What that means in practice.',
  },
];

const MANIFESTO_QUOTES = [
  ['Autonomy is a systems property,', 'not a model feature.'],
  ['Reliable agents need orchestration,', 'not just clever prompts.'],
  ['AI safety is an architecture choice,', 'not a policy footnote.'],
  ['Tool access shapes agent outcomes,', 'more than raw model size.'],
  ['Memory must be governed by design,', 'or risk grows with scale.'],
  ['Observability makes autonomy viable,', 'in real production systems.'],
  ['Multi-agent flow needs control planes,', 'not hand-tuned heroics.'],
  ['Context windows are tactical,', 'shared memory is strategic.'],
  ['Trust comes from repeatable behavior,', 'not impressive demos.'],
  ['Standards unlock system scale,', 'across teams and tools.'],
  ['Execution quality defines value,', 'when agents take action.'],
];

const HERO_TITLES = [
  ['Autonomous', 'Intelligence.', 'In Practice.'],
  ['Adaptive', 'Systems.', 'In Production.'],
  ['Responsible', 'Agents.', 'At Scale.'],
  ['Data-Led', 'Autonomy.', 'Delivered.'],
  ['Orchestrated', 'Intelligence.', 'For Work.'],
  ['Trusted', 'AI Systems.', 'Built Right.'],
  ['Practical', 'Agent Networks.', 'In Action.'],
  ['Guided', 'Autonomy.', 'With Control.'],
  ['Agentic', 'Intelligence.', 'Value Created.'],
];

export default function Home({ latestPosts, heroImage }) {
  const [heroTitleIndex, setHeroTitleIndex] = useState(0);
  const [isHeroTitleFading, setIsHeroTitleFading] = useState(false);
  const [heroLineOne, heroLineTwo, heroLineThree] = HERO_TITLES[heroTitleIndex];
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isQuoteFading, setIsQuoteFading] = useState(false);
  const [quoteLineOne, quoteLineTwo] = MANIFESTO_QUOTES[quoteIndex];

  useEffect(() => {
    const fadeDurationMs = 350;
    let fadeTimeoutId;

    const intervalId = setInterval(() => {
      setIsHeroTitleFading(true);

      fadeTimeoutId = setTimeout(() => {
        setHeroTitleIndex((current) => (current + 1) % HERO_TITLES.length);
        setIsHeroTitleFading(false);
      }, fadeDurationMs);
    }, 8000);

    return () => {
      clearInterval(intervalId);
      if (fadeTimeoutId) clearTimeout(fadeTimeoutId);
    };
  }, []);

  useEffect(() => {
    const fadeDurationMs = 350;
    let fadeTimeoutId;

    const intervalId = setInterval(() => {
      setIsQuoteFading(true);

      fadeTimeoutId = setTimeout(() => {
        setQuoteIndex((current) => (current + 1) % MANIFESTO_QUOTES.length);
        setIsQuoteFading(false);
      }, fadeDurationMs);
    }, 8000);

    return () => {
      clearInterval(intervalId);
      if (fadeTimeoutId) clearTimeout(fadeTimeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Head>
        <title>Riverthink — Data Platforms & Agentic Intelligence, In Practice</title>
        <meta
          name="description"
          content="Riverthink covers data platforms and agentic intelligence — from modern data architecture and orchestration patterns to governance, security, and the infrastructure of autonomous work."
        />
      </Head>

      <Nav active="home" />

      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background image */}
        {heroImage && (
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
          </div>
        )}
        {!heroImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d0d] to-riverNavy/20" />
        )}

        {/* Red left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-riverRed z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 w-full">
          <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.4em] mb-8">
            Data Platforms &nbsp;·&nbsp; Agentic Intelligence
          </p>

          <h1
            className={`font-display text-6xl md:text-8xl lg:text-[108px] font-black uppercase leading-[0.88] text-white mb-8 max-w-4xl min-h-[2.64em] transition-opacity duration-300 ${isHeroTitleFading ? 'opacity-30' : 'opacity-100'}`}
          >
            <span className="block">{heroLineOne}</span>
            <span className="block">{heroLineTwo}</span>
            <span className="block text-riverRed">{heroLineThree}</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
            Riverthink covers data platforms and agentic intelligence — from modern data architecture
            and orchestration to governance, security, and the infrastructure that makes
            autonomous work real.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/blog"
              className="bg-riverRed text-white font-bold uppercase tracking-[0.2em] text-[11px] px-8 py-4 hover:bg-red-700 transition-colors duration-150"
            >
              Explore Articles →
            </Link>
            <Link
              href="/about"
              className="border border-white/30 text-white font-bold uppercase tracking-[0.2em] text-[11px] px-8 py-4 hover:border-white hover:bg-white/5 transition-colors duration-150"
            >
              About Riverthink
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 flex flex-wrap items-center gap-8 md:gap-16">
            {[
              { value: '10+', label: 'Deep Dive Articles' },
              { value: '6', label: 'Focus Areas' },
              { value: '2026', label: 'Ahead of the Curve' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-16">
                <div>
                  <p className="font-display text-4xl md:text-5xl font-black text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mt-2">
                    {stat.label}
                  </p>
                </div>
                {i < 2 && <div className="hidden md:block w-px h-14 bg-white/15" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Cover ── */}
      <section className="bg-[#111111] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-4">
              Focus Areas
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-white">
              Data & Agents,<br />At Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {FOCUS_AREAS.map((area) => (
              <div
                key={area.title}
                className="bg-[#111111] p-8 hover:bg-[#181818] transition-colors duration-200 group"
              >
                <div className="w-8 h-0.5 bg-riverRed mb-6 group-hover:w-14 transition-all duration-300" />
                <h3 className="font-display text-xl font-bold uppercase text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Posts ── */}
      <section className="bg-[#0d0d0d] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-4">
                Latest
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-white">
                Recent Dispatches
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500 hover:text-white transition-colors duration-150"
            >
              All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-[#111111] overflow-hidden flex flex-col"
              >
                {/* Hero image — B&W with colour on hover */}
                {post.meta.hero && (
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.meta.hero}
                      alt=""
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    {post.meta.tags && post.meta.tags.length > 0 && (
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                        {post.meta.tags.map((tag) => (
                          <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 ${tag === 'Round Up' ? 'bg-yellow-500 text-black' : tag === 'Executive Brief' ? 'bg-white text-black' : 'bg-riverRed text-white'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-3">
                    {post.meta.formattedDate}
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase text-white leading-tight mb-3 group-hover:text-riverRed transition-colors duration-150">
                    <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[11px] font-bold uppercase tracking-[0.25em] text-riverRed hover:text-white transition-colors duration-150"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section className="bg-riverNavy py-24 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-riverRed" />
        <div className="absolute right-0 top-0 w-64 h-full opacity-5">
          <div className="font-display font-black text-[200px] text-white leading-none select-none">
            AI
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p
            className={`font-display text-2xl md:text-5xl font-black uppercase text-white leading-tight mb-8 transition-opacity duration-300 ${isQuoteFading ? 'opacity-30' : 'opacity-100'}`}
          >
            <span className="block">"{quoteLineOne}</span>
            <span className="block">{quoteLineTwo}"</span>
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            The shift to agentic intelligence is built on data platforms that were designed for it.
            Orchestration, governance, and the right data infrastructure are what make
            autonomous systems safe and effective at scale.
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="/blog/pwood.PNG"
              alt="Peter Wood"
              className="w-12 h-12 rounded-full object-cover grayscale"
            />
            <div className="text-left">
              <p className="text-white text-sm font-semibold">Peter Wood</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Riverthink</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  const latestPosts = posts.slice(0, 3).map((post) => ({
    ...post,
    meta: {
      ...post.meta,
      formattedDate: post.meta.date
        ? new Date(post.meta.date).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : null,
    },
  }));

  const heroImage = posts[0]?.meta?.hero || null;

  return {
    props: {
      latestPosts,
      heroImage,
    },
  };
}
