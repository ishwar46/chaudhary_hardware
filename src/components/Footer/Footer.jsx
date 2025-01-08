import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiTiktok } from "react-icons/si";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-20 pt-10">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              Chaudhary Hardware
            </h1>
            <p>
              Explore the best tools and supplies for all your hardware needs.
              Trusted by thousands in Nepal.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Important Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links and Contact */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Connect With Us
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-3xl hover:text-primary transition-all duration-300" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="text-3xl hover:text-primary transition-all duration-300" />
                </a>
                <a href="#" aria-label="TikTok">
                  <SiTiktok className="text-3xl hover:text-primary transition-all duration-300" />
                </a>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>Pepsicola, Kathmandu</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoCall />
                  <p>+977 9801234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center py-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © ChaudharyHardWare. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
