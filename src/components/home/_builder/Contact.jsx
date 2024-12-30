"use client";
import { useState } from "react";
import connectBG from "@/public/contactBG.webp";

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
      className="relative py-16 h-fit px-20"
      style={{
        backgroundImage: `url(${connectBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "10",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-85 md:opacity-70 z-10"></div>
      <div className="container relative mx-auto flex flex-col md:flex-row items-center z-20">
        <div className="md:w-[35%] text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-300 mb-8">Get in Touch</h2>
          <p className="text-lg max-w-xl text-gray-300 mb-8">
            Interested in collaborating or have a project in mind? Feel free to contact me through this form or connect
            with me on social media.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                className="w-full border-2 rounded-lg border-gray-600 bg-transparent p-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-0 transition-all duration-300 backdrop-blur-md"
                placeholder="Your Name"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full border-2 rounded-lg border-gray-600 bg-transparent p-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-0 transition-all duration-300 backdrop-blur-md"
                placeholder="Your Email"
              />
            </div>
            <div className="relative">
              <textarea
                rows="5"
                name="message"
                className="w-full border-2 rounded-lg border-gray-600 bg-transparent p-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-0 transition-all duration-300 backdrop-blur-md"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 min-w-28 flex justify-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300"
            >
              {submitted ? (
                "Submitted ✓"
              ) : isLoading ? ( // Changed from setIsLoading to isLoading
                <div className="animate-spin">
                  <Loader />
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
