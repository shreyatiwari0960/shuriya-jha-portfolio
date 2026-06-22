import Services from "../components/Services";

function ServicesPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-900 text-white text-center">
        <h1 className="text-6xl font-bold mb-4">
          Our Services
        </h1>

        <p className="text-xl text-gray-300">
          Your Trusted Partner for Tax & Travel Services        
        </p>
      </div>

      <Services />
    </>
  );
}

export default ServicesPage;