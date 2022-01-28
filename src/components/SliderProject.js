import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { slideData } from "../slideData";

const SliderProject = ({ imageIndex, setImageIndex }) => {
   const PrevArrow = ({ onClick }) => {
      return (
         <div className="arrow prev-button" onClick={onClick}>
            <FaArrowLeft />
         </div>
      );
   };

   const NextArrow = ({ onClick }) => {
      return (
         <div className="arrow next-button" onClick={onClick}>
            <FaArrowRight />
         </div>
      );
   };

   const settings = {
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      swipeToSlide: true,
      pauseOnHover: true,
      dots: true,
      autoplaySpeed: 3500,
      speed: 400,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
      responsive: [
         {
            breakpoint: 720,
            settings: {
               dots: true,
               arrows: false,
               slidesToShow: 1,
            },
         },
      ],
   };

   return (
      <div className="slides">
         <Slider {...settings}>
            {slideData.map((slide, index) => (
               <div
                  key={slide.index}
                  className={
                     index === imageIndex
                        ? "slide active--slide relative"
                        : "slide"
                  }
               >
                  <img src={slide.img} alt={slide.title} />
                  <div
                     className={
                        index === imageIndex
                           ? "absolute opacity-0 transition-all hover:opacity-100 top-0 bottom-0 left-5 right-5 text-white bg-black/60 flex flex-col  gap-3 justify-center items-center "
                           : "hidden"
                     }
                  >
                     <h1 className="text-base font-bold">{slide.title}</h1>
                     <a href={slide.url} target="_blank" rel="noreferrer">
                        <button className="px-3 py-1 bg-gray-500 text-xs rounded-md hover:bg-gray-600">
                           Open
                        </button>
                     </a>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default SliderProject;
