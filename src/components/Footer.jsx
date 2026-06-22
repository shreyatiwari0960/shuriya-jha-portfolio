import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>

            <h2 className="text-3xl font-bold mb-4">
              SHURIYA ACCOUNTS & TRAVEL SERVICES
            </h2>

            <p className="text-gray-400 leading-7">
            Professional solutions for Tax Filing,
            GST Registration, TDS/TCS Services,
            Passport, Visa and Travel Booking.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact Info
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>
                📞 8287316347
              </p>

              <p>
                ✉️ jhavk1412091@gmail.com
              </p>

              <p>
                📍 India
              </p>

              <p>
                Available 7 Days A Week
              </p>

            </div>

          </div>

        </div>

        <hr className="my-10 border-gray-800" />

        <div className="text-center text-gray-500">

          © 2026 Shuriya Accounts & Travel Services. All Rights Reserved. 
        </div>

      </div>

    </footer>
  );
}

export default Footer;