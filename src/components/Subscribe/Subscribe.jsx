import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 text-white"
    >
      <div className="container backdrop-blur-sm py-12 px-6">
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay Updated on New Products and Offers
          </h1>
          <p
            className="text-base text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Subscribe to our newsletter to receive the latest updates on
            products, exclusive discounts, and more!
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 mt-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary transition-all duration-300 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
