import React from "react";
import Image1 from "../../assets/hero/power_tool.avif";
import Image2 from "../../assets/hero/plumbing.jpg";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% Off on Power Tools",
    description:
      "Upgrade your workshop with high-quality power tools. Limited-time offer on drills, saws, and more!",
  },
  {
    id: 2,
    img: Image2,
    title: "30% Off on Plumbing Supplies",
    description:
      "Stock up on essential plumbing tools and supplies. Save big on pipes, fittings, and more!",
  },
  {
    id: 3,
    img: Image3,
    title: "70% Off on Clearance Sale",
    description:
      "Don’t miss our clearance sale! Huge discounts on construction materials and hardware accessories.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30 blur-lg"></div>
      <div className="absolute -top-1/3 -left-1/3 h-[700px] w-[700px] bg-primary/20 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] bg-secondary/20 rounded-full blur-3xl opacity-50 -z-10"></div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 sm:px-12 py-16">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
                {/* Text Section */}
                <div className="text-center sm:text-left">
                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800 dark:text-white"
                    data-aos="fade-right"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    {data.description}
                  </p>
                  <div
                    className="mt-6"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center sm:justify-end">
                  <img
                    src={data.img}
                    alt="Promotion"
                    className="w-[90%] max-w-[400px] sm:max-w-[500px] object-contain rounded-lg shadow-2xl transition-transform duration-500 hover:scale-110"
                    data-aos="zoom-in"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
