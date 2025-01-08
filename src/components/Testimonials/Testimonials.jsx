import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Prabin Chaudhary",
    text: "The quality of products is unmatched, and the customer service is outstanding. I’m thoroughly impressed!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Bale Baral",
    text: "Amazing service and timely delivery! Highly recommend this store for all your hardware needs.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Singh",
    text: "Great experience shopping here! The staff is knowledgeable, and the product range is extensive.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sayana Gajraj",
    text: "Excellent quality tools and equipment. I always find what I’m looking for at a reasonable price.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-xl mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-medium">
            Hear from Our Customers
          </p>
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            className="text-base text-gray-600 dark:text-gray-300 mt-2"
          >
            See what our satisfied customers have to say about their experience
            with us.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white dark:bg-slate-700 relative">
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-24 h-24 border-4 border-primary shadow-md"
                    />
                  </div>
                  {/* Testimonial Text */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {data.text}
                      </p>
                      <h1 className="text-lg font-bold text-gray-800 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  {/* Decorative Quote */}
                  <p className="text-gray-200 text-9xl font-serif absolute top-2 left-4 opacity-20">
                    “
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
