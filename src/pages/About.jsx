function About() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-6">
          About SHURIYA ACCOUNTS & TRAVEL SERVICES
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          SHURIYA ACCOUNTS & TRAVEL SERVICES is a trusted service provider
          offering ITR Filing, GST Registration, TDS/TCS Services,
          Passport Assistance, Visa Support, Flight Ticket Booking,
          Railway Ticket Booking and Travel Solutions.

          We assist individuals, families and businesses with fast,
          reliable and professional services.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600">
              To provide hassle-free taxation, accounting and travel
              services with transparency, accuracy and complete
              customer satisfaction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600">
              To become a trusted one-stop destination for tax filing,
              travel bookings, passport assistance, visa support and
              financial services across India.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;