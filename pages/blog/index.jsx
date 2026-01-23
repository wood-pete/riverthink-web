import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default function BlogIndex({ posts }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col bg-white px-6 py-8">
      <Head>
        <title>Riverthink Blog</title>
        <meta
          name="description"
          content="Ideas on agentic AI, tooling, and the momentum behind Riverthink."
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

      <main className="flex flex-1 flex-col gap-8 pt-12">
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.25em] text-riverNavy">Blog</p>
          <h1 className="text-3xl font-bold text-slate-900">Agentic AI in motion</h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Dispatches from the Riverthink team exploring agentic systems, feedback-rich design,
            and the workflows that keep AI grounded in reality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                {post.meta.hero ? (
                  <img
                    src={post.meta.hero}
                    alt=""
                    className="h-40 w-full rounded-xl border border-slate-100 object-cover"
                  />
                ) : null}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-riverGray">
                    <span>Agentic AI</span>
                    {post.meta.date ? (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                        {post.meta.formattedDate}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-700">{post.excerpt}</p>
                </div>
              </div>
              <div className="mt-6 text-sm font-semibold text-riverNavy">
                <Link href={`/blog/${post.slug}`}>Read the story →</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
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

// Disable client-side JS on this page so crawlers see static HTML in the source.
export const config = {
  unstable_runtimeJS: false,
};
