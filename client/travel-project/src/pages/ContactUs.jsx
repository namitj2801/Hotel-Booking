import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-12">
        We’d love to hear from you! Whether you have a question, feedback, or
        need support with your booking, our team is here to help.
      </p>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Your message"
              rows="5"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Customer Support
            </h2>
            <p className="text-gray-600 mt-2">support@mydreamplace.com</p>
            <p className="text-gray-600">+1 (234) 567-890</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Head Office</h2>
            <p className="text-gray-600 mt-2">
              123 Dream Street, Wanderlust City, <br /> Travel State, 45678
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Working Hours
            </h2>
            <p className="text-gray-600 mt-2">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-gray-600">
              Saturday - Sunday: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-12"></div>
    </div>
  );
};

export default Contact;
