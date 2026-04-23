export default function Loading() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <div className="h-10 w-56 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded bg-gray-200" />
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="h-7 w-2/3 animate-pulse rounded bg-gray-200" />
              <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="mt-2 h-4 w-11/12 animate-pulse rounded bg-gray-200" />
              <div className="mt-6 h-10 w-28 animate-pulse rounded bg-gray-200" />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
