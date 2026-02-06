// Contact.jsx
import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid md:grid-cols-2 overflow-hidden">
        
        {/* Left: Image */}
        <div className="hidden md:block">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-500 mt-2 mb-8">
            Have a question or want to work with us? Drop a message.
          </p>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:ring-2 focus:ring-primary focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 border-t"></div>

          {/* Contact Info */}
          <div className="space-y-3 text-sm text-gray-600">
            <p><span className="font-medium text-gray-800">Email:</span> info@example.com</p>
            <p><span className="font-medium text-gray-800">Phone:</span> +1 555 123 4567</p>
            <p><span className="font-medium text-gray-800">Location:</span> Cityville, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
