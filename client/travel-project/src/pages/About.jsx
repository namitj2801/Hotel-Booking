import React from "react";

const About = () => {
  return (
    <div className="about-page font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-12 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
          About My Dream Place
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Your gateway to unforgettable stays, seamless bookings, and cherished
          travel memories.
        </p>
      </section>

      {/* Mission & Story */}
      <section className="py-12 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            My Dream Place started with a simple vision – to make travel
            planning as joyful as the journey itself. We connect travelers with
            top-rated hotels, cozy boutique stays, and luxurious resorts,
            ensuring every trip feels special.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From a small idea to a growing platform, we’ve helped thousands of
            travelers discover their dream stays worldwide. Every booking is
            backed by our commitment to quality, trust, and customer
            satisfaction.
          </p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/500x350"
            alt="Our Story"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          To bring travelers closer to their perfect destination by offering a
          reliable, affordable, and user-friendly hotel booking experience. We
          believe every journey deserves the comfort of a perfect stay.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center text-blue-600">
          Why Choose My Dream Place?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">
              Wide Selection
            </h3>
            <p className="text-gray-600">
              From budget-friendly rooms to luxury suites, we have something for
              every traveler.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">
              Best Prices
            </h3>
            <p className="text-gray-600">
              Competitive rates and exclusive deals help you save more on every
              booking.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">
              Trusted Reviews
            </h3>
            <p className="text-gray-600">
              Honest guest feedback to help you make confident booking
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to find your dream place?
        </h2>
        <p className="mb-6">
          Start exploring the best hotels around the world today.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default About;
