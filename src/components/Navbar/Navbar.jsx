import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Logo from "../../assets/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Tools",
    link: "/#tools",
  },
  {
    id: 3,
    name: "Construction Materials",
    link: "/#materials",
  },
  {
    id: 4,
    name: "Electrical Supplies",
    link: "/#electrical",
  },
  {
    id: 5,
    name: "Plumbing Supplies",
    link: "/#plumbing",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Tools",
    link: "/#trending-tools",
  },
  {
    id: 2,
    name: "Best Selling Materials",
    link: "/#best-selling",
  },
  {
    id: 3,
    name: "Top Rated Supplies",
    link: "/#top-rated",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200">
      {/* Upper Navbar */}
      <div className="bg-gradient-to-r from-primary to-secondary py-2">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center">
              <img src={Logo} alt="Chaudhary Hardware" className="w-17 h-16" />
            </a>
          </div>

          {/* Search Bar and Actions */}
          <div className="hidden md:flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search Products"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-4" />
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-200 flex items-center gap-2"
            >
              <span>Order Now</span>
              <FaCartShopping className="text-lg" />
            </button>

            {/* Dark Mode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>

          {/* Hamburger Menu */}
          <div
            className="md:hidden cursor-pointer text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div
        className={`md:flex items-center justify-center ${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-100 dark:bg-slate-700 py-3 shadow-sm`}
      >
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 px-4 md:px-0">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="text-gray-800 dark:text-gray-300 hover:text-primary font-medium transition-colors duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown Section */}
          <li className="group relative">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-800 dark:text-gray-300 font-medium hover:text-primary transition-colors duration-200"
            >
              Explore
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute hidden group-hover:block bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-300 shadow-md rounded-md mt-2">
              <ul>
                {DropdownLinks.map((data) => (
                  <li
                    key={data.id}
                    className="px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
