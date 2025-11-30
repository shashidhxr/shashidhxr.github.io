import Projects from "./components/Projects";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={`${robotoMono.className} space-y-10`}>
      {/* Hero / Intro */}
      <section className="mt-6 space-y-3">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m <span className="text-orange-400">Shashidhar Biradar</span>
        </h1>
        <p className="text-gray-200 text-lg">
          Final-year Computer Science student in Bengaluru, deeply interested in{" "}
          <span className="text-white">
            backend engineering, distributed systems, operating systems, and networking.
          </span>
        </p>
        <p className="text-gray-400 text-sm">
          I enjoy designing systems that are correct, observable, and resilient under load.
        </p>
      </section>

      {/* About Me */}
      <section id="about" className="space-y-2">
        <h2 className="text-xl text-orange-500">About Me</h2>
        <p className="text-gray-200">
          I&apos;m a final-year CS student graduating in 2026, and I gravitate naturally
          towards problems that involve concurrency, performance, and system design.
          I&apos;ve solved hundreds of data-structures and algorithms problems, and I use
          that foundation to think clearly about trade-offs in real systems.
        </p>
        <p className="text-gray-200">
          My interests live at the intersection of backend engineering, distributed systems,
          operating systems, and security. I like understanding how things work all the way
          down from TCP and syscalls up to APIs and product behavior.
        </p>
        <p className="text-gray-200">
          I try to approach work like an engineer, not just a coder: write things down,
          build small but solid pieces, and iterate with discipline and curiosity.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="space-y-3">
        <h2 className="text-xl text-orange-500">Experience</h2>

        <div className="space-y-1">
          <h3 className="font-semibold text-white">
            Backend Engineering Intern &mdash; project44
          </h3>
          <p className="text-gray-400 text-sm">December 2025</p>
          <ul className="list-disc list-inside text-gray-200 text-sm">
            <li>
              Joining the team as a backend engineer to work on high-throughput,
              reliability-focused services.
            </li>
            <li>
              Excited to work with production systems, observability, and real-world
              performance constraints.
            </li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold text-white">
            Hybrid Event-Triggered Intrusion Detection &mdash; Research / Capstone
          </h3>
          <ul className="list-disc list-inside text-gray-200 text-sm">
            <li>
              Built a hybrid intrusion detection system for CAN bus traffic, combining
              rule-based filters with machine learning.
            </li>
            <li>
              Achieved large reductions in expensive ML inference calls while keeping
              detection quality near the baseline.
            </li>
            <li>
              Focused on system behavior under load: latency, resource usage, and
              practical deployability.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects (text-based overview) */}
      <section id="projects" className="space-y-4">
        <h2 className="text-xl text-orange-500">Projects</h2>
        <p className="text-gray-300 text-sm">
          I like building things that expose real constraints: concurrency, failures,
          state, and scale. A few representative projects:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Trex &mdash; Tech Blogging and Forum Platform
            </h3>
            <p className="text-gray-200 text-sm">
              A serverless-first blogging and discussion platform built to experiment with
              cloud-native architecture and DX.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              <li>
                Built on Cloudflare Workers (Hono) with a PostgreSQL + Prisma backend.
              </li>
              <li>
                Used Next.js and Tailwind CSS on the frontend, deployed via Vercel for
                fast iteration.
              </li>
              <li>
                Focused on clean API design, auth flows, and predictable data access
                patterns.
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-1">
              Stack: Cloudflare Workers · Hono · PostgreSQL · Prisma · Next.js · Tailwind
            </p>
            <div className="text-sm mt-1">
              <a
                href="https://github.com/shashidhxr/trex"
                className="text-orange-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {" • "}
              <a
                href="https://trex0.vercel.app/"
                className="text-orange-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Payx &mdash; Payments and Banking App
            </h3>
            <p className="text-gray-200 text-sm">
              A simple banking-style app to practice modeling balances, transactions,
              and edge cases around money flows.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              <li>
                Implemented core flows like transfers, balance checks, and history views
                with a MySQL + Express backend.
              </li>
              <li>
                Focused on avoiding inconsistent state and handling failures gracefully.
              </li>
              <li>
                Used Tailwind for fast iteration on the UI while most of the complexity
                lives in the backend.
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-1">
              Stack: Node.js · Express · MySQL · Tailwind
            </p>
            <div className="text-sm mt-1">
              <a
                href="https://github.com/shashidhxr/paytm-app"
                className="text-orange-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Newz &mdash; News Aggregator
            </h3>
            <p className="text-gray-200 text-sm">
              A minimal news aggregation app used to explore client-side vs server-side
              rendering trade-offs.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              <li>
                Built with Next.js and Tailwind, backed by Firebase for auth and
                persistence.
              </li>
              <li>
                Implemented basic feeds and user state, focusing on correctness more than
                flashy UI.
              </li>
            </ul>
            <p className="text-xs text-gray-400 mt-1">
              Stack: Next.js · Firebase · Tailwind
            </p>
            <div className="text-sm mt-1">
              <a
                href="https://github.com/shashidhxr/paytm-app"
                className="text-orange-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {" • "}
              <a
                href="https://newz0.vercel.app/"
                className="text-orange-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Visual preview using your existing grid */}
        <div className="mt-8">
          <h3 className="text-sm uppercase tracking-wide text-gray-400">
            Projects preview
          </h3>
          <Projects />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="space-y-3">
        <h2 className="text-xl text-orange-500">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-200">
          <div>
            <h3 className="font-semibold text-white mb-1">
              Distributed Systems & Backend
            </h3>
            <p>APIs, concurrency, background jobs, reliability, observability.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">
              Languages & Tools
            </h3>
            <p>Go, TypeScript/JavaScript, Node.js, SQL, basic C/C++.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">
              Databases & Infra
            </h3>
            <p>PostgreSQL, MySQL, Redis, Docker, cloud platforms.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">
              Problem Solving
            </h3>
            <p>Strong DSA foundation and competitive programming background.</p>
          </div>
        </div>
      </section>

      {/* Notes / Writing */}
      <section id="notes" className="space-y-2">

        <h2 className="text-xl text-orange-500">Notes & Writing</h2>
        <p className="text-gray-200">
          I plan to use this site as a place to write about systems topics that
          interest me &mdash; from queues and storage engines to networking,
          observability, and performance. The goal is to have a collection
          of working notes, design docs, and problem breakdowns.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-2 mb-10">
        <h2 className="text-xl text-orange-500">Contact</h2>
        <p className="text-gray-200">
          I&apos;m always open to interesting backend, distributed systems, or
          infra-related opportunities and collaborations.
        </p>
        <p className="text-gray-200">
          Reach out to me by email:&nbsp;
          <a
            href="mailto:your-email@example.com"
            className="text-orange-400 hover:underline"
          >
            shashidhxr@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
