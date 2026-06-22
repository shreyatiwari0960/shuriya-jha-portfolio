function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-56 w-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.pexels.com/photos/7235908/pexels-photo-7235908.jpeg?auto=compress&cs=tinysrgb&w=1200";
          }}
        />
      </div>

      <div className="p-6">

        <h3 className="text-xl font-bold mb-3 text-slate-900">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6 min-h-[72px]">
          {service.description}
        </p>

        <div className="flex gap-3">

          <a
            href={`https://wa.me/918287316347?text=Hello%20JHA%20Services,%20I%20am%20interested%20in%20${service.title}`}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            WhatsApp
          </a>

          <a
            href={`mailto:jhavk1412091@gmail.com?subject=${service.title}%20Inquiry`}
            className="border border-slate-300 hover:bg-slate-100 px-4 py-2 rounded-lg transition duration-300"
          >
            Email
          </a>

        </div>

      </div>

    </div>
  );
}

export default ServiceCard;