function Contact() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600">
            Get in touch for tax, travel and documentation services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-3xl font-bold mb-8">
              Let's Talk
            </h3>

            <div className="space-y-6 text-lg">

              <div>
                📞 Phone / WhatsApp:
                <br />
                8287316347
              </div>

              <div>
                📧 Email:
                <br />
                jhavk1412091@gmail.com
              </div>

              <div>
                🕒 Available:
                <br />
                Monday - Sunday
              </div>

            </div>

            <div className="flex gap-4 mt-10">

              <a
                href="https://wa.me/918287316347?text=Hello%20JHA%20Services,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl"
              >
                WhatsApp
              </a>

              <a
                href="mailto:jhavk1412091@gmail.com?subject=Service Inquiry"
                className="border border-black px-6 py-3 rounded-xl"
              >
                Email
              </a>

            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-4 rounded-xl"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;