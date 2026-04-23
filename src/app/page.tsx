export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">HubOps</h1>
      <p className="text-lg mb-6">B2B Digital & Branding Consulting</p>
      <a
        href="/services"
        className="inline-block px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors"
      >
        View Our Services
      </a>
    </div>
  );
}
