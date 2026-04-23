import type { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import type { Service } from "@/types/service";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore HubOps B2B digital and branding consulting services including brand strategy, SEO, performance marketing, and growth consulting.",
};

export default async function ServicesPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/services`);

  if (!res.ok) {
    return (
      <main className="bg-gray-50 py-16 text-gray-900">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
            We could not load services right now. Please try again
            later.
          </div>
        </div>
      </main>
    );
  }

  const services = (await res.json()) as Service[];

  return (
    <main className="bg-gray-50 py-16 text-gray-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Discover the consulting capabilities we use to help B2B
            teams sharpen brand positioning, scale demand generation,
            and drive sustainable growth.
          </p>
        </header>

        <ServiceGrid services={services} />
      </div>
    </main>
  );
}
