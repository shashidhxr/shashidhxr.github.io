// // app/components/Projects.tsx
// import Image from "next/image";

// export default function Projects() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-8 max-w-4xl mx-auto">
//       <a
//         className="flex flex-col justify-between bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-4 h-60"
//         href="https://www.hystruct.com"
//         target="_blank"
//       >
//         <div className="relative rounded-xl mb-2 shadow-project h-36">
//           <Image
//             alt="Hystruct Project Image"
//             width={450}
//             height={240}
//             className="rounded-xl object-cover"
//             src="/hystruct.png"
//           />
//         </div>
//         <div className="flex-grow">
//           <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
//             Hystruct
//           </h3>
//           <h3 className="text-slate-500 text-base">
//             Scrape structured data from the web with AI
//           </h3>
//         </div>
//       </a>

//       <a
//         className="flex flex-col justify-between bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-4 h-60"
//         href="https://glow.as"
//         target="_blank"
//       >
//         <div className="relative rounded-xl mb-2 shadow-project h-36">
//           <Image
//             alt="Glow Project Image"
//             width={450}
//             height={240}
//             className="rounded-xl object-cover"
//             src="/glow.png"
//           />
//         </div>
//         <div className="flex-grow">
//           <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
//             Glow
//           </h3>
//           <h3 className="text-slate-500 text-base">
//             A super simple way to create beautiful personal landing pages.
//           </h3>
//         </div>
//       </a>

//       <a
//         className="flex flex-col justify-between bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-4 h-60"
//         href="https://flagdb.com"
//         target="_blank"
//       >
//         <div className="relative rounded-xl mb-2 shadow-project h-36">
//           <Image
//             alt="FlagDB Project Image"
//             width={450}
//             height={240}
//             className="rounded-xl object-cover"
//             src="/flagdb.png"
//           />
//         </div>
//         <div className="flex-grow">
//           <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
//             FlagDB
//           </h3>
//           <h3 className="text-slate-500 text-base">
//             A personal project to build a database of flags.
//           </h3>
//         </div>
//       </a>

//       <a
//         className="flex flex-col justify-between bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-4 h-60"
//         href="https://github.com/alexpate/awesome-design-systems"
//         target="_blank"
//       >
//         <div className="relative rounded-xl mb-2 shadow-project h-36">
//           <Image
//             alt="Awesome Design Systems Project Image"
//             width={450}
//             height={240}
//             className="rounded-xl object-cover"
//             src="/awesome-design-systems.png"
//           />
//         </div>
//         <div className="flex-grow">
//           <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
//             Awesome Design Systems
//           </h3>
//           <h3 className="text-slate-500 text-base">
//             A curated list of design systems.
//           </h3>
//         </div>
//       </a>
//     </div>
//   );
// }

// app/components/Projects.tsx
import Link from "next/link";

type Project = {
  name: string;
  tagline: string;
  role?: string;
  details: string[];
  stack: string;
  github?: string;
  docs?: string;
};

const projects: Project[] = [
  {
    name: "queueCTL",
    tagline: "Distributed background job queue CLI.",
    details: [
      "Worker-pool based execution with bounded queues and back-pressure.",
      "At-least-once delivery with retries, exponential backoff, and idempotency guarantees.",
      "Graceful shutdown: drains in-flight jobs and exposes health endpoints for orchestration.",
    ],
    stack: "Go · CLI · Concurrency · Context cancellation · Docker",
    github: "https://github.com/your-username/queuectl",
    docs: "/notes/queuectl-design", // future internal link
  },
  {
    name: "GammaDB",
    tagline: "Log-structured distributed key-value store.",
    details: [
      "Append-only storage engine with segment compaction and tombstones.",
      "Read path optimized with in-memory indexes and on-disk SSTable-style files.",
      "Explored locking strategies and concurrency control for multi-goroutine access.",
    ],
    stack: "Go · Storage engines · Concurrency · File I/O",
    github: "https://github.com/your-username/gammadb",
    docs: "/notes/gammadb-storage",
  },
  {
    name: "API Gateway for AI Workloads",
    tagline: "Scalable request routing & rate-limiting layer.",
    details: [
      "Fan-out/fan-in pattern to multiple model backends with per-tenant limits.",
      "Token-bucket based rate limiting and circuit breaking for unhealthy upstreams.",
      "Caching hot responses and aggregating metrics for SLO monitoring.",
    ],
    stack: "Go/C++ · Reverse proxy · Rate limiting · Load balancing",
    github: "https://github.com/your-username/ai-gateway",
    docs: "/notes/api-gateway-architecture",
  },
  {
    name: "Hybrid Event-Triggered IDS",
    tagline: "Efficient intrusion detection for CAN bus traffic.",
    details: [
      "Hybrid rule-based + ML pipeline with ~95% reduction in model invocations.",
      "Evaluated on Car Hacking dataset; near-baseline recall with lower cost.",
      "Focused on OS-level performance and memory footprint under load.",
    ],
    stack: "Python · ML · Networking · Linux",
    github: "https://github.com/your-username/canbus-ids",
    docs: "/notes/hybrid-ids-car-hacking",
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {projects.map((p) => (
        <article
          key={p.name}
          className="flex flex-col justify-between rounded-xl border border-slate-700/70 bg-slate-900/80 p-4 shadow-md hover:border-blue-500/70 hover:shadow-lg transition"
        >
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {p.name}
            </h3>
            <p className="text-sm text-blue-300 mb-2">{p.tagline}</p>

            <ul className="space-y-1 text-sm text-slate-200">
              {p.details.map((d) => (
                <li key={d}>• {d}</li>
              ))}
            </ul>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-700/80 flex flex-col gap-2">
            <p className="text-xs text-slate-400">{p.stack}</p>
            <div className="flex flex-wrap gap-3 text-xs">
              {p.github && (
                <Link
                  href={p.github}
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 underline"
                >
                  GitHub
                </Link>
              )}
              {p.docs && (
                <Link
                  href={p.docs}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Design notes
                </Link>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
