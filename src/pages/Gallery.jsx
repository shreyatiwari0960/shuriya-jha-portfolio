import g1 from "../assets/gallery/g1.png";
import g2 from "../assets/gallery/g2.png";
import g3 from "../assets/gallery/g3.png";
import g4 from "../assets/gallery/g4.png";
import g5 from "../assets/gallery/g5.png";
import g6 from "../assets/gallery/g6.png";

function Gallery() {
  const images = [
    {
      img: g1,
      title: "Passport Services",
    },
    {
      img: g2,
      title: "Visa Assistance",
    },
    {
      img: g3,
      title: "Flight Booking",
    },
    {
      img: g4,
      title: "Railway Ticket Booking",
    },
    {
      img: g5,
      title: "Tour & Travel",
    },
    {
      img: g6,
      title: "Online Documentation",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Gallery
        </h1>

        <p className="text-center text-gray-600 mb-16">
          Explore our services and travel solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;