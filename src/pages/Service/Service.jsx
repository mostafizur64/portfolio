import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaAddressCard, FaIdCard, FaBuffer } from 'react-icons/fa';

const Service = () => {
  const swiperBreakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  // Duplicate slides manually for infinite loop effect
  const slides = [
    {
      id: '1',
      title: "Web Design",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: <FaAddressCard className="w-16 h-16 bg-orange-500 text-white rounded-full p-4" />,
    },
    {
      id: '2',
      title: "Web Development",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: <FaIdCard className="w-16 h-16 bg-orange-500 text-white rounded-full p-4"/>,
    },
    {
      id: '3',
      title: "UI/UX Design",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: <FaBuffer className="w-16 h-16 bg-orange-500 text-white rounded-full p-4"/>,
    },
  ];

  // Duplicate the slides for infinite loop effect
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-4 mt-12">
        <div className="space-y-4">
          <h2 className="text-orange-500 text-3xl font-semibold">Services</h2>
          <h2 className="text-4xl text-[#15295f] font-extrabold">I Provide Wide Range Of Digital Services</h2>
        </div>
        <div className="col-span-3 ...">
          <Swiper
            breakpoints={swiperBreakpoints}
            centeredSlides={true}
            grabCursor={true}
            className="mySwiper"
            slidesPerView={1}
            loop={true}
          >

            {duplicatedSlides.map((slide) => (
              <SwiperSlide  className="w-full h-96">
                <div key={slide.id} className="card border-2 P-2 text-center">
              
                    <div className="mt-8  mx-auto ">{slide.image} </div>
               
                  <div className="card-body">
                    <h2 className="card-title">{slide.title}</h2>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service;
