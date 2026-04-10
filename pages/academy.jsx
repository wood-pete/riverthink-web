import Head from 'next/head';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const COURSE_URL = 'https://www.udemy.com/course/data-agenticai-academy/?referralCode=0E8E22FA52ABB8F79F2D';

const SECTIONS = [
  {
    number: '01',
    title: 'Introduction and Overview',
    summary: 'A fast orientation to the academy, who it is for, and how the curriculum is designed to build visible capability rather than passive familiarity.',
  },
  {
    number: '02',
    title: 'Industry Insider Secrets',
    summary: 'Learn how to decode sectors quickly, build relevance with clients and employers, and turn research into practical professional advantage.',
  },
  {
    number: '03',
    title: 'Critical Thinking Accelerators',
    summary: 'Frameworks for ambiguity, structured judgement, problem framing, and better decisions when the data is incomplete and the stakes are real.',
  },
  {
    number: '04',
    title: 'Building Data Literacy Across Platforms and Teams',
    summary: 'A practical foundation in storage, models, formats, integration, architectures, cloud-native thinking, and the language data teams actually use.',
  },
  {
    number: '05',
    title: 'Cheat Your Way Through ETL',
    summary: 'A vendor-aware tour through ETL patterns, cloud platform tradeoffs, and the shortcuts that help you sound grounded instead of generic.',
  },
  {
    number: '06',
    title: 'Engineering Essentials',
    summary: 'Enough Git, CI/CD, Docker, Kubernetes, DevOps, and MLOps to help you participate credibly and get real work moving.',
  },
  {
    number: '07',
    title: 'The Modern Makeup of Methodologies',
    summary: 'A grounded tour of the major enterprise frameworks, what they are good for, and how to tailor them without turning them into bureaucracy.',
  },
  {
    number: '08',
    title: 'Agentic AI Integration',
    summary: 'From prompts and LangChain to RAG, MCP, A2A, agent patterns, guardrails, orchestration, and live demos that move beyond slides.',
  },
];

const HIGHLIGHTS = [
  '91 lectures across data, architecture, engineering, decision-making, and agentic AI.',
  'Preview-enabled lessons so visitors can sample the teaching style before enrolling.',
  'Assignments and quizzes built in, not just passive video watching.',
  'A curriculum designed to help professionals sound relevant, credible, and practical fast.',
];

const AUDIENCE = [
  {
    title: 'Aspiring Data Professionals',
    body: 'People trying to break into data, analytics, engineering, or architecture who want stronger vocabulary, clearer commercial awareness, and a more credible foundation.',
  },
  {
    title: 'Consultants and Client-Facing Roles',
    body: 'Professionals who need to sound sharper in front of clients, understand industries faster, and connect technical ideas to business value without hand-waving.',
  },
  {
    title: 'Managers and Decision-Makers',
    body: 'Leaders who need enough technical depth to evaluate platforms, AI initiatives, and delivery choices without becoming full-time engineers.',
  },
  {
    title: 'Builders Moving Into AI',
    body: 'Engineers, analysts, architects, and data practitioners who want a practical bridge from modern data platforms into agentic AI, orchestration, and guardrails.',
  },
];

const OUTCOMES = [
  'Decode unfamiliar industries and ask better questions sooner.',
  'Build stronger data and platform literacy without needing a pure engineering background.',
  'Speak more confidently about ETL, cloud platforms, Git, CI/CD, MLOps, and container workflows.',
  'Understand how agentic AI systems are actually assembled, integrated, and governed.',
];

const TAGLINES = [
  'The Old Still Works. The New Changes Everything.',
  'Respect the Past. Engineer the Future.',
  'Built on Foundations. Designed for Autonomy.',
  'From Proven Systems to Intelligent Action.',
  'Keep CI/CD. Build Agentic Systems.',
  'Keep the Systems. Build the Agents.',
  'Keep the Foundations. Build the Future.',
  'Keep Pipelines. Build Decision Loops.',
];

export default function AcademyPage() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isTaglineFading, setIsTaglineFading] = useState(false);

  useEffect(() => {
    const fadeDurationMs = 300;
    let fadeTimeoutId;

    const intervalId = setInterval(() => {
      setIsTaglineFading(true);

      fadeTimeoutId = setTimeout(() => {
        setTaglineIndex((current) => (current + 1) % TAGLINES.length);
        setIsTaglineFading(false);
      }, fadeDurationMs);
    }, 4200);

    return () => {
      clearInterval(intervalId);
      if (fadeTimeoutId) clearTimeout(fadeTimeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Head>
        <title>Academy — Riverthink</title>
        <meta
          name="description"
          content="Explore the Data + Agentic AI Academy: a practical curriculum covering industry insight, critical thinking, data literacy, ETL, engineering essentials, methodologies, and agentic AI integration."
        />
      </Head>

      <Nav active="academy" />

      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(181,21,27,0.28),_transparent_38%),radial-gradient(circle_at_left,_rgba(255,255,255,0.07),_transparent_28%)]" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-riverRed" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-5">
              Academy &nbsp;·&nbsp; Data &nbsp;·&nbsp; Agentic AI
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] text-white">
              Data +
              <br />
              Agentic AI
              <br />
              Academy
            </h1>
            <p
              className={`mt-5 max-w-2xl text-base md:text-lg font-bold text-riverRed leading-relaxed min-h-[3.25rem] transition-opacity duration-300 ${isTaglineFading ? 'opacity-25' : 'opacity-100'}`}
            >
              {TAGLINES[taglineIndex]}
            </p>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              A practical academy for people who want to become more relevant in data,
              architecture, engineering, and modern AI systems. This is built for professionals
              who want sharper judgement, stronger language, and real working knowledge across the
              stack.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={COURSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-riverRed text-white font-bold uppercase tracking-[0.2em] text-[11px] px-8 py-4 hover:bg-red-700 transition-colors duration-150"
              >
                View On Udemy →
              </a>
              <a
                href={`${COURSE_URL}#content`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[11px] px-8 py-4 hover:border-white hover:bg-white/5 transition-colors duration-150"
              >
                See Course Details →
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-4xl">
              {[
                { value: '8', label: 'Sections' },
                { value: '91', label: 'Lectures' },
                { value: '3', label: 'Assignments' },
                { value: '8', label: 'Quizzes' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111111] px-6 py-5">
                  <div className="font-display text-4xl font-black text-white">{stat.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-riverRed/10 blur-2xl" />
            <a
              href={COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="academy-hero-frame relative block overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl"
              aria-label="Open the Data + Agentic AI Academy on Udemy"
            >
              <img
                src="/academy/academy-hero.png"
                alt="Data + Agentic AI Academy artwork"
                className="w-full h-full object-cover"
              />
              <div className="academy-hero-spotlight" aria-hidden="true" />
              <div className="academy-hero-sheen" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-4">
              Why This Academy
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] text-white">
              For People
              <br />
              Who Want
              <br />
              To Stand Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="bg-[#111111] p-8">
                <div className="w-9 h-0.5 bg-riverRed mb-5" />
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] px-6 py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto mb-20">
          <div className="max-w-3xl mb-10">
            <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-4">
              Who It&apos;s For
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] text-white">
              Aspiring Data
              <br />
              Professionals
              <br />
              Early Career
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              The academy is designed for aspiring data professionals at an early stage in their
              career who need to become more commercially relevant and technically literate at the
              same time. It is not just for pure engineers, and it is not just for passive
              learners either.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AUDIENCE.map((item) => (
              <div key={item.title} className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="w-9 h-0.5 bg-riverRed mb-5" />
                <h3 className="font-display text-2xl font-black uppercase text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14">
          <div>
            <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-4">
              What You Build
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-[0.95] text-white mb-8">
              Cross-Disciplinary
              <br />
              Confidence
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              The curriculum is deliberately broad. It connects commercial awareness, structured
              thinking, data foundations, engineering literacy, enterprise methodologies, and
              agentic AI integration so learners can operate with more context and less bluffing.
            </p>
          </div>

          <div className="space-y-4">
            {OUTCOMES.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="font-display text-3xl font-black text-riverRed leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-4">
                Full Curriculum
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-white leading-[0.95]">
                Eight Sections.
                <br />
                Real Breadth.
              </h2>
            </div>
            <a
              href={COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500 hover:text-white transition-colors duration-150"
            >
              Enrol On Udemy →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SECTIONS.map((section) => (
              <div
                key={section.number}
                className="border border-white/10 bg-[#111111] p-6 md:p-8"
              >
                <div className="text-riverRed font-display text-4xl font-black leading-none">
                  {section.number}
                </div>
                <h3 className="mt-5 font-display text-2xl md:text-3xl font-black uppercase text-white">
                  {section.title}
                </h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {section.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] px-6 py-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto border border-white/20 bg-white text-black px-6 py-6 md:px-8 md:py-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-riverRed mb-3">
            Join The Discussion
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <p className="text-sm md:text-base leading-relaxed max-w-3xl">
              If you are taking the academy, get involved in the Discord discussion. It is the
              best place to ask questions, share ideas, and stay close to the conversation around
              data, engineering, and agentic AI.
            </p>
            <a
              href="https://discord.gg/dvFqe2Avv7"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 hover:bg-riverRed transition-colors duration-150"
            >
              Join Discord →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-riverRed text-[11px] font-bold uppercase tracking-[0.35em] mb-4">
            Next Step
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-white leading-[0.95]">
            Build The Language.
            <br />
            Build The Judgement.
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            If you want a practical route into data, architecture, and agentic AI without getting
            trapped in buzzwords, the academy is the cleanest place to start.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-riverRed text-white font-bold uppercase tracking-[0.2em] text-[11px] px-8 py-4 hover:bg-red-700 transition-colors duration-150"
            >
              Go To Academy →
            </a>
            <a
              href={`${COURSE_URL}#content`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[11px] px-8 py-4 hover:border-white hover:bg-white/5 transition-colors duration-150"
            >
              Browse Curriculum →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
