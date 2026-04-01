import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { getAllPosts } from '../../lib/posts';

const PAGE_SIZE = 6;

export default function BlogIndex({ posts }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const pagePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function goTo(p) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Head>
        <title>Blog — Riverthink</title>
        <meta
          name="description"
          content="Deep analysis of agentic AI systems, protocols, security patterns, and the architecture of autonomous work."
        />
      </Head>

      <Nav active="blog" />

      {/* ── Blog Hero ── */}
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
            Deep analysis of agentic intelligence, orchestration patterns, human impact, security frameworks, and
            the infrastructure of autonomous ecosystems.
          </p>
        </div>
      </section>

      {/* ── Post Grid ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagePosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-[#111111] overflow-hidden flex flex-col"
              >
                {/* Hero image — B&W, colour on hover */}
                {post.meta.hero ? (
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
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-riverNavy/30 to-black flex items-end p-6">
                    {post.meta.tags && post.meta.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
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
                  <h2 className="font-display text-xl font-bold uppercase text-white leading-tight mb-3 group-hover:text-riverRed transition-colors duration-150">
                    <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
                  </h2>
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

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-10">
              <button
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-150"
              >
                ← Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => goTo(p)}
                    className={`w-8 h-8 text-[11px] font-bold uppercase tracking-widest transition-colors duration-150 ${
                      p === page
                        ? 'bg-riverRed text-white'
                        : 'text-gray-400 hover:text-white border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-150"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  const postsWithFormattedDates = posts.map((post) => ({
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
  return {
    props: {
      posts: postsWithFormattedDates,
    },
  };
}
