import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className="relative h-fit">
      <div className="absolute w-full h-20  bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 "></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt=""
          ></img>
        </div>

        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt=""
          ></img>
        </div>

        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt=""
          ></img>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
