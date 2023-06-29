import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
      id: 1,
      title: "mostafizur rahman",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "{user?.photoURL}",
    },
    {
      id: 2,
      title: "mostafizur rahman",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "{user?.photoURL}",
    },
    {
      id: 3,
      title: "mostafizur rahman",
      description: "If a dog chews shoes whose shoes does he choose?",
      image: "{user?.photoURL}",
    },
  ];

  // Duplicate the slides for infinite loop effect
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-4 mt-12">
        <div className="...">
          <h2>Services</h2>
          <h2>I Provide Wide Range Of Digital Services</h2>
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
              <SwiperSlide key={slide.id} className="w-full ">
                <div className="card border-2">
                  <figure>
                    <img src={slide.image} alt="" />
                  </figure>
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
