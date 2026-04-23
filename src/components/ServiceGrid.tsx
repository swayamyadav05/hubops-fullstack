import ServiceCard from "@/components/ServiceCard";
import { Service } from "@/types/service";

type ServiceGridProps = {
  services: Service[];
};

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
}
