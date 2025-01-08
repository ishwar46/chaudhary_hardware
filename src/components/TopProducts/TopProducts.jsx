import React from "react";
import Img1 from "../../assets/products/drill_elec.png";
import Img2 from "../../assets/products/hammer.png";
import Img3 from "../../assets/products/screw_kit.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Electric Drill",
    description:
      "Powerful and reliable drill for all your construction and DIY projects. Easy to use and highly durable.",
  },
  {
    id: 2,
    img: Img2,
    title: "Hammer Set",
    description:
      "High-quality hammer set designed for precision and strength. Ideal for carpentry and repair tasks.",
  },
  {
    id: 3,
    img: Img3,
    title: "Screwdriver Kit",
    description:
      "Comprehensive screwdriver kit with multiple heads. Perfect for professional and home use.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-12">
          <p data-aos="fade-up" className="text-sm text-primary font-semibold">
            Top Rated Tools for You
          </p>
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold text-gray-800 dark:text-white"
          >
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-base text-gray-500 dark:text-gray-400 mt-2"
          >
            Explore our top-rated hardware tools and supplies designed for
            construction, repair, and DIY enthusiasts.
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl duration-300 group"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform transform group-hover:scale-110"
                />
              </div>
              {/* Details Section */}
              <div className="p-6">
                {/* Star Rating */}
                <div className="flex justify-center items-center gap-1 mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-white text-center">
                  {data.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-center">
                  {data.description}
                </p>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
