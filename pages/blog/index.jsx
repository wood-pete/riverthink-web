import { useMemo, useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Seo from '../../components/Seo';

const SUBSTACK_URL = 'https://riverthink.substack.com/';
const SUBSTACK_FEED_URL = `${SUBSTACK_URL}feed`;
const PAGE_SIZE = 6;

function decodeXml(value = '') {
  return value
    .replace(/^<!\[CDATA\[|\]\]>$/g, '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .trim();
}

function field(item, name) {
  const match = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return match ? decodeXml(match[1]) : '';
}

function parseSubstackFeed(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map(([, item]) => {
    const enclosure = item.match(/<enclosure\s[^>]*url=["']([^"']+)["']/i);
    return {
      title: field(item, 'title'),
      description: field(item, 'description').replace(/<[^>]+>/g, '').trim(),
      url: field(item, 'link'),
      author: field(item, 'dc:creator'),
      publishedAt: field(item, 'pubDate'),
      image: enclosure ? decodeXml(enclosure[1]) : '',
    };
  }).filter((post) => post.title && post.url);
}

function Pagination({ page, totalPages, goTo }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-between gap-6">
      <button
        type="button"
        onClick={() => goTo(page - 1)}
        disabled={page === 1}
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
      >
        ← Previous
      </button>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
        {page} / {totalPages}
      </span>
      <button
        type="button"
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages}
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
      >
        Next →
      </button>
    </div>
  );
}

export default function BlogIndex({ posts = [], feedUnavailable = false }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const pagePosts = useMemo(
    () => posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page, posts]
  );

  function goTo(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 420, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Seo
        title="Agentic AI, Data Platforms & Leadership"
        description="Deep analysis of agentic AI systems, protocols, security patterns, healthcare AI, and the architecture of autonomous work."
        path="/blog/"
        imageWidth={1200}
        imageHeight={630}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Riverthink Blog',
          url: 'https://riverthink.com/blog/',
          description:
            'Deep analysis of agentic AI systems, protocols, security patterns, healthcare AI, and the architecture of autonomous work.',
        }}
      />

      <Nav active="blog" />

      <section className="bg-black py-20 px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-riverRed" />
        <div className="absolute right-8 top-8 font-display font-black text-[120px] md:text-[200px] text-white/5 leading-none select-none uppercase">
          Blog
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-5">
            riverthink.com
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-black uppercase text-white leading-[0.9] mb-6">
            Dispatches
            <br />
            from the Edge
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Deep analysis of agentic intelligence, leadership, orchestration patterns, human impact, security
            frameworks, and the infrastructure of autonomous ecosystems.
          </p>
        </div>
      </section>

      <main className="bg-[#0d0d0d] px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 pb-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.3em] mb-2">
                Latest writing
              </p>
              <p className="text-gray-400">Published by Riverthink on Substack.</p>
            </div>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex self-start bg-riverRed px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors"
            >
              Visit &amp; subscribe →
            </a>
          </div>

          {pagePosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pagePosts.map((post) => (
                  <article key={post.url} className="group bg-[#151515] flex flex-col overflow-hidden">
                    {post.image && (
                      <a href={post.url} target="_blank" rel="noreferrer" className="block aspect-video overflow-hidden bg-black">
                        <img
                          src={post.image}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                      </a>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-3">
                        {post.formattedDate}{post.author ? ` · ${post.author}` : ''}
                      </p>
                      <h2 className="font-display text-xl font-bold uppercase text-white leading-tight mb-3 group-hover:text-riverRed transition-colors">
                        <a href={post.url} target="_blank" rel="noreferrer">{post.title}</a>
                      </h2>
                      {post.description && (
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">{post.description}</p>
                      )}
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] font-bold uppercase tracking-[0.2em] text-riverRed hover:text-white transition-colors"
                        >
                          Read on Substack →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <Pagination page={page} totalPages={totalPages} goTo={goTo} />
              </div>
            </>
          ) : (
            <div className="border border-white/10 bg-[#151515] px-6 py-12 text-center">
              <p className="text-gray-300 mb-5">
                {feedUnavailable ? 'The latest articles could not be loaded right now.' : 'No articles are available yet.'}
              </p>
              <a className="text-riverRed font-bold uppercase tracking-wider" href={SUBSTACK_URL} target="_blank" rel="noreferrer">
                Read Riverthink on Substack →
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(SUBSTACK_FEED_URL, {
      headers: { 'User-Agent': 'Riverthink.com RSS reader' },
    });
    if (!response.ok) throw new Error(`Substack returned ${response.status}`);

    const posts = parseSubstackFeed(await response.text()).map((post) => ({
      ...post,
      formattedDate: new Date(post.publishedAt).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'Europe/London',
      }),
    }));

    return { props: { posts, feedUnavailable: false } };
  } catch (error) {
    console.warn(`Unable to load the Substack RSS feed: ${error.message}`);
    return { props: { posts: [], feedUnavailable: true } };
  }
}
