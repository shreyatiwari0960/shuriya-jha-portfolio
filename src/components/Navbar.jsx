import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const activeClass = "text-cyan-400";
  const normalClass = "text-white hover:text-cyan-300 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          <Link
            to="/"
            className="hidden md:block text-2xl font-bold text-white tracking-wide"
          >
            SHURIYA ACCOUNTS & TRAVEL SERVICES
          </Link>

          <Link
            to="/"
            className="md:hidden text-lg font-bold text-white tracking-wide"
          >
            SHURIYA SERVICES
          </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? activeClass
                  : normalClass
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className={
                location.pathname === "/services"
                  ? activeClass
                  : normalClass
              }
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? activeClass
                  : normalClass
              }
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              className={
                location.pathname === "/gallery"
                  ? activeClass
                  : normalClass
              }
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              to="/testimonials"
              className={
                location.pathname === "/testimonials"
                  ? activeClass
                  : normalClass
              }
            >
              Reviews
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? activeClass
                  : normalClass
              }
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 text-white">

          <ul className="flex flex-col items-center gap-6 py-8">

            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/"
                    ? activeClass
                    : normalClass
                }
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/services"
                    ? activeClass
                    : normalClass
                }
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/about"
                    ? activeClass
                    : normalClass
                }
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/gallery"
                    ? activeClass
                    : normalClass
                }
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/testimonials"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/testimonials"
                    ? activeClass
                    : normalClass
                }
              >
                Reviews
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === "/contact"
                    ? activeClass
                    : normalClass
                }
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;