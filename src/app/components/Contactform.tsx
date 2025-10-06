"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Thanks for reaching out! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-[#fffaf0] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#722F37]">
          Let’s Connect About Your Next Journey
        </h2>
        <p className="text-[#722F37]/80 mb-10">
          Have questions or want to start planning your next Sportcation?
          Drop us a message below — we’ll get back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-8 space-y-6 text-left border border-[#e2c7b5]"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#722F37] mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#e2c7b5] rounded-xl px-4 py-3 text-[#722F37] placeholder-[#c6a9a9] focus:ring-2 focus:ring-[#722F37] focus:outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#722F37] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#e2c7b5] rounded-xl px-4 py-3 text-[#722F37] placeholder-[#c6a9a9] focus:ring-2 focus:ring-[#722F37] focus:outline-none transition"
              placeholder="Enter your email address"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#722F37] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[#e2c7b5] rounded-xl px-4 py-3 text-[#722F37] placeholder-[#c6a9a9] focus:ring-2 focus:ring-[#722F37] focus:outline-none transition"
              placeholder="Tell us how we can help"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#722F37] text-white font-medium py-3 rounded-xl hover:bg-[#5e2530] disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
