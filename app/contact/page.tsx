export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-gray-200">
        Open to internships, backend/distributed systems roles, and interesting
        collaborations.
      </p>

      <a
        href="mailto:your-email@example.com"
        className="inline-block text-orange-500 hover:underline"
      >
        your-email@example.com
      </a>
    </section>
  );
}
