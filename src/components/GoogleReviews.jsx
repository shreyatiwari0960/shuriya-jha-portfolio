function GoogleReviews() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Google Reviews
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Trusted by hundreds of happy customers
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-50 p-8 rounded-3xl shadow-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Fast GST registration service and excellent support.
            </p>
            <h4 className="mt-4 font-bold">
              Rahul Sharma
            </h4>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Passport work completed smoothly and quickly.
            </p>
            <h4 className="mt-4 font-bold">
              Priya Verma
            </h4>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-lg">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Very helpful travel booking service.
            </p>
            <h4 className="mt-4 font-bold">
              Amit Kumar
            </h4>
          </div>

        </div>

      </div>

    </section>
  );
}

export default GoogleReviews;