import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import b1 from "./amazon_b1.jpg";
import b2 from "./amazon_b2.jpg";
import b3 from "./amazon_b3.jpg";

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
          <img loading="lazy" src={b1} alt=""></img>
        </div>

        <div>
          <img loading="lazy" src={b2} alt=""></img>
        </div>

        <div>
          <img loading="lazy" src={b3} alt=""></img>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
