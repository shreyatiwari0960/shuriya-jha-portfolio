import services from "../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Professional tax, travel and documentation solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;