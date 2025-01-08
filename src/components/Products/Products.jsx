import React from "react";
import Img1 from "../../assets/products/powerdtill.jpg";
import Img2 from "../../assets/products/cir_saw.jpg";
import Img3 from "../../assets/products/tape.jpg";
import Img4 from "../../assets/products/goggles.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Power Drill",
    rating: 5.0,
    color: "Orange",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Circular Saw",
    rating: 4.5,
    color: "Blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Adjustable Wrench",
    rating: 4.7,
    color: "Silver",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Plumbing Tape",
    rating: 4.4,
    color: "White",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Safety Goggles",
    rating: 4.5,
    color: "Transparent",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-semibold">
            Best Selling Hardware Tools
          </p>
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold text-gray-800 dark:text-white"
          >
            Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-base text-gray-500 dark:text-gray-400 mt-2"
          >
            Explore our top-rated tools and supplies for all your construction,
            plumbing, and DIY needs.
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg duration-300 group"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[150px] w-[150px] object-contain"
                />
              </div>
              {/* Details Section */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                  {data.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Color: {data.color}
                </p>
                <div className="flex justify-center items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      className={`${
                        index < Math.round(data.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 dark:text-gray-300">
                    ({data.rating.toFixed(1)})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
