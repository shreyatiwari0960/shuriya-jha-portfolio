import videoBg from "../assets/videos/travel.mp4";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55"></div>

<div className="relative z-10 flex items-center justify-center h-full pt-24">
        <div className="text-center px-6 max-w-5xl">

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
            Trusted Tax, Travel &
            <span className="text-cyan-400"> Documentation Services</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl mb-10">
            ITR Filing • GST Registration • Passport • Visa • Flight &
            Railway Booking • Tour Packages
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/918287316347"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold"
            >
              WhatsApp Now
            </a>

            <a
              href="mailto:jhavk1412091@gmail.com"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full"
            >
              Send Email
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;