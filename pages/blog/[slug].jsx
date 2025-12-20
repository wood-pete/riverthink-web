import Head from 'next/head';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '../../lib/posts';

export default function BlogPost({ post }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col bg-white px-6 py-8">
      <Head>
        <title>{post.meta.title} | Riverthink Blog</title>
        <meta
          name="description"
          content={post.excerpt || 'A perspective on agentic AI from Riverthink.'}
        />
      </Head>

      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-4 text-sm font-semibold text-slate-800">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
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
        <article className="pt-10">
          <p className="text-xs uppercase tracking-[0.22em] text-riverGray">Agentic AI</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">{post.meta.title}</h1>
          {post.meta.date ? (
            <p className="mt-2 text-sm text-slate-500">
              {new Date(post.meta.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          ) : null}
          {post.meta.hero ? (
            <img
              src={post.meta.hero}
              alt=""
              className="mt-8 w-full rounded-2xl border border-slate-100 object-cover"
            />
          ) : null}
          <div
            className="blog-content mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <div className="mt-12">
          <Link href="/blog" className="text-sm font-semibold text-riverNavy">
            ← Back to all posts
          </Link>
        </div>
      </main>
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
  return {
    props: {
      post,
    },
  };
}

// Disable client-side JS on this page so the HTML stays fully visible to crawlers.
export const config = {
  unstable_runtimeJS: false,
};
