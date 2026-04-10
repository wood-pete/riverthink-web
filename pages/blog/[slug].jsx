import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Seo from '../../components/Seo';
import { getPostBySlug, getPostSlugs, getAllPosts } from '../../lib/posts';

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.5 14.5H7V10h2.5v7.5ZM8.25 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm9.25 8.5H15V14c0-.84-.66-1.5-1.5-1.5S12 13.16 12 14v3.5H9.5V10H12v1.03c.5-.74 1.36-1.03 2.21-1.03 1.81 0 3.29 1.48 3.29 3.29v4.21Z" />
    </svg>
  );
}

function RelatedPosts({ posts }) {
  const [startIdx, setStartIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (posts.length <= 3) return;
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setStartIdx((i) => (i + 1) % posts.length);
        setFading(false);
      }, 500);
    }, 4500);
    return () => clearInterval(timer);
  }, [posts.length]);

  const shown = [0, 1, 2].map((i) => posts[(startIdx + i) % posts.length]);

  return (
    <section className="bg-[#111111] border-t border-white/10 py-14">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-8">
          More from Riverthink
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.5s ease' }}
        >
          {shown.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <div className="overflow-hidden bg-black mb-3" style={{ aspectRatio: '16/6' }}>
                {p.meta.hero ? (
                  <img
                    src={p.meta.hero}
                    alt={p.meta.heroAlt || p.meta.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-riverNavy/30 to-black" />
                )}
              </div>
              <h3 className="font-display text-base font-bold uppercase text-white leading-snug group-hover:text-riverRed transition-colors duration-200">
                {p.meta.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPost({ post, otherPosts }) {
  const postUrl = `https://riverthink.com/blog/${post.slug}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
  const description = post.meta.description || post.excerpt || 'A perspective on agentic AI from Riverthink.';
  const structuredData = [
    {
      '@type': 'BlogPosting',
      headline: post.meta.title,
      description,
      image: post.meta.hero ? [`https://riverthink.com${post.meta.hero}`] : undefined,
      datePublished: post.meta.date || undefined,
      dateModified: post.meta.updated || post.meta.date || undefined,
      author: {
        '@type': 'Person',
        name: 'Peter Wood',
        url: 'https://riverthink.com/about/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Riverthink',
        logo: {
          '@type': 'ImageObject',
          url: 'https://riverthink.com/riverthink-logo.png',
        },
      },
      mainEntityOfPage: postUrl,
      keywords: post.meta.tags,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://riverthink.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://riverthink.com/blog/' },
        { '@type': 'ListItem', position: 3, name: post.meta.title, item: postUrl },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Seo
        title={post.meta.title}
        description={description}
        path={`/blog/${post.slug}/`}
        imageAlt={post.meta.heroAlt || post.meta.title}
        imageWidth={1200}
        imageHeight={630}
        type="article"
        publishedTime={post.meta.date}
        modifiedTime={post.meta.updated || post.meta.date}
        tags={post.meta.tags || []}
        structuredData={structuredData}
      />

      <Nav active="blog" />

      {/* ── Post header ── */}
      <header className="bg-black pt-14 pb-0 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500 hover:text-riverRed transition-colors duration-150 mb-10"
          >
            ← All Articles
          </Link>

          {post.meta.tags && post.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.meta.tags.map((tag) => (
                <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 ${tag === 'Round Up' ? 'bg-yellow-500 text-black' : tag === 'Executive Brief' ? 'bg-white text-black' : 'bg-riverRed text-white'}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="shimmer-title font-display text-4xl md:text-6xl font-black uppercase leading-[0.92] mb-6">
            {post.meta.title}
          </h1>

          {post.meta.date && (
            <p className="text-gray-500 text-[11px] uppercase tracking-[0.25em] pb-10">
              {post.meta.formattedDate}
            </p>
          )}

          <div className="pb-10">
            <a
              href={linkedInShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-riverRed hover:text-white transition-colors duration-150"
            >
              <LinkedInIcon />
              <span>Share on LinkedIn ↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero image — full width, grayscale ── */}
      {post.meta.hero && (
        <div className="relative w-full overflow-hidden bg-black" style={{ maxHeight: '55vh' }}>
          <img
            src={post.meta.hero}
            alt={post.meta.heroAlt || post.meta.title}
            className="w-full object-cover grayscale"
            style={{ maxHeight: '55vh' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
        </div>
      )}

      {/* ── Article body ── */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* ── Author bio ── */}
        <div className="mt-20 border-t border-white/10 pt-14">
          <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-8">
            About the Author
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="shrink-0 overflow-hidden w-20 h-20 rounded-full ring-2 ring-white">
              <img
                src="/peterwood.PNG"
                alt="Peter Wood"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-white mb-3">
                Peter Wood
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Healthcare technology leader specialising in data platforms, operational
                intelligence, and agent-driven automation. Peter has led large-scale digital
                transformation programmes with major hospital groups and global technology
                partners, translating advanced analytics and AI into measurable improvements in
                clinical operations, capacity, and patient flow.
              </p>
            </div>
          </div>
        </div>

        {/* ── Back link ── */}
        <div className="mt-14 flex flex-col gap-6">
          <a
            href={linkedInShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-riverRed hover:text-white transition-colors duration-150"
          >
            <LinkedInIcon />
            <span>Share on LinkedIn ↗</span>
          </a>
          <Link
            href="/blog"
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-riverRed hover:text-white transition-colors duration-150"
          >
            ← Back to All Articles
          </Link>
        </div>
      </main>

      {/* ── Related posts ── */}
      {otherPosts && otherPosts.length > 0 && (
        <RelatedPosts posts={otherPosts} />
      )}

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.replace(/\.md$/, '') },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  const allPosts = await getAllPosts();
  const otherPosts = allPosts
    .filter((p) => p.slug !== params.slug)
    .map((p) => ({
      slug: p.slug,
      meta: {
        title: p.meta.title,
        hero: p.meta.hero,
        heroAlt: p.meta.heroAlt,
      },
    }));

  const formattedDate = post.meta.date
    ? new Date(post.meta.date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;
  return {
    props: {
      post: {
        ...post,
        meta: {
          ...post.meta,
          formattedDate,
        },
      },
      otherPosts,
    },
  };
}
