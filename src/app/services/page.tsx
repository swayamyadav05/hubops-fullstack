import type { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import type { Service } from "@/types/service";
import { services as localServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore HubOps B2B digital and branding consulting services including brand strategy, SEO, performance marketing, and growth consulting.",
};

export default async function ServicesPage() {
  let services: Service[] = localServices;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    try {
      const res = await fetch(`${siteUrl}/api/services`, {
        next: { revalidate: 3600 },
      });

      if (res.ok) {
        services = (await res.json()) as Service[];
      }
    } catch {
      services = localServices;
    }
  }

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
