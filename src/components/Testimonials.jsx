function Testimonials() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Customer Reviews
        </h2>

        <p className="text-center text-gray-600 mb-16">
          What our customers say about our services.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-50 p-8 rounded-3xl shadow-md">
            <h3 className="font-bold mb-3">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="text-gray-600 mb-4">
              Excellent GST registration support.
              Quick and professional service.
            </p>

            <h4 className="font-semibold">
              Rahul Sharma
            </h4>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-md">
            <h3 className="font-bold mb-3">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="text-gray-600 mb-4">
              Passport and visa process was
              completed smoothly.
            </p>

            <h4 className="font-semibold">
              Priya Verma
            </h4>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-md">
            <h3 className="font-bold mb-3">
              ⭐⭐⭐⭐⭐
            </h3>

            <p className="text-gray-600 mb-4">
              Booked flight tickets at the best
              price. Highly recommended.
            </p>

            <h4 className="font-semibold">
              Amit Kumar
            </h4>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;