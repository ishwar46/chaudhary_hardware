import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/60 z-50 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 sm:p-8 w-[90%] sm:w-[400px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                  🚧 Site Under Construction
                </h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer text-gray-800 dark:text-white"
                  onClick={() => setOrderPopup(false)}
                />
              </div>

              {/* Message Section */}
              <div className="space-y-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our website is currently under construction, but we’re still
                  here to assist you! Please contact us for deliveries or any
                  queries.
                </p>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-center">
                    <FaMapMarkerAlt className="text-primary text-lg" />
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Pepsicola, Kathmandu
                    </p>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <FaPhoneAlt className="text-primary text-lg" />
                    <a
                      href="tel:+9779801234567"
                      className="text-gray-700 dark:text-gray-300 font-medium underline hover:text-primary"
                    >
                      +977 9801234567
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center mt-6">
                <button
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => setOrderPopup(false)}
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
