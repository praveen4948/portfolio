"use client";
import { useState } from "react";
import connectBG from "@/public/contactBG.webp";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Loader = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2" // Changed from stroke-width to strokeWidth
        strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
        strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
        className="lucide lucide-loader-circle" // Changed from class to className
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    // Validation: Check if name and email are not empty
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      alert("All fields are required.");
      setIsLoading(false);
      return; // Exit the function if validation fails
    }

    formData.append("access_key", "217bcfb9-c08e-48a4-b297-619f456bb0a2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      // console.log(result);
      setSubmitted(true);
    }
    setIsLoading(false);
  }

  return (
    <section
      id="contact"
      className="relative py-20 h-fit px-6 md:px-10 lg:px-20"
      style={{
        backgroundImage: `url(${connectBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "10",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/85 md:bg-gray-900/70 z-10"></div>
      <div className="container relative mx-auto z-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Left visual panel */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-pink-500/10 to-violet-500/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.25),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.25),transparent_40%)]" />
            <div className="relative p-8 h-full flex flex-col justify-end">
              <h2 className="text-3xl font-bold text-white mb-2">Tell me about your idea</h2>
              <p className="text-gray-200">
                I usually respond within 24 hours. Share a few lines about your project and I’ll get back to you.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white/5 border border-white/15 rounded-xl p-8 md:p-10 backdrop-blur-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-gray-900/80 px-2 text-xs text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 transition"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-gray-900/80 px-2 text-xs text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-gray-900/80 px-2 text-xs text-gray-300">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 transition"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className="mt-2 min-w-32 inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-full text-lg hover:bg-amber-700 transition disabled:opacity-70"
              >
                {submitted ? (
                  "Submitted ✓"
                ) : isLoading ? ( // Changed from setIsLoading to isLoading
                  <div className="animate-spin">
                    <Loader />
                  </div>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
