export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-800">About Riverthink</h1>
      <p className="mt-4 text-lg text-slate-600">
        Riverthink is a space for ideas to flow, clarify, and turn into momentum. This
        simple sample app shows how to structure a two-page React experience with a clean
        Tailwind-powered layout.
      </p>
      <div className="mt-8 grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Built with React</h2>
          <p className="mt-2 text-slate-600">
            Client-side routing keeps the experience smooth as you move between the
            landing page and this about section.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Styled with Tailwind CSS</h2>
          <p className="mt-2 text-slate-600">
            Utility classes keep the styling lean, consistent, and easy to adjust without
            leaving the component files.
          </p>
        </div>
      </div>
    </div>
  );
}
