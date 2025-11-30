// app/projects/page.tsx
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-gray-300 mb-6">
        A selection of backend and distributed systems projects I’ve built to
        explore reliability, performance, and real-world constraints.
      </p>
      <Projects />
    </section>
  );
}
