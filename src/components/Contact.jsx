import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
`;

    const url = `https://wa.me/918287316347?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600">
            Get in touch for tax, travel and financial services.
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
                href="https://wa.me/918287316347"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl"
              >
                WhatsApp
              </a>

              <a
                href="mailto:jhavk1412091@gmail.com"
                className="border border-black px-6 py-3 rounded-xl"
              >
                Email
              </a>

            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
                required
              />

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-4 rounded-xl hover:bg-cyan-600 transition"
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