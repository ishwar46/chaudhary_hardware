import React from "react";
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="max-w-[450px] h-[400px] w-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Details Section */}
          <div className="flex flex-col gap-8 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white leading-tight"
            >
              Winter Sale up to <span className="text-primary">50% Off</span>
            </h1>
            <p
              data-aos="fade-up"
              className="text-base text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed"
            >
              Upgrade your toolbox this winter! Discover premium-quality tools
              and supplies at unbeatable prices. Shop now and save big.
            </p>
            <div className="flex flex-col gap-6">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p className="text-gray-700 dark:text-gray-200 font-medium">
                  Quality Products
                </p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p className="text-gray-700 dark:text-gray-200 font-medium">
                  Fast Delivery
                </p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="text-gray-700 dark:text-gray-200 font-medium">
                  Easy Payment Methods
                </p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p className="text-gray-700 dark:text-gray-200 font-medium">
                  Exciting Offers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
