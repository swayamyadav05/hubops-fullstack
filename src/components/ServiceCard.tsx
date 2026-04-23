import { Service } from '@/types/service';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold tracking-tight text-zinc-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-700">{service.description}</p>
      <button
        type="button"
        className="mt-5 inline-flex items-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-700"
      >
        Learn More
      </button>
    </article>
  );
}
