"use client";
import React, { components } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  return (
    <Carousel autoPlay infiniteLoop showArrows showThumbs={false}>
      <div>
        <img src="/images/riral.jpg" alt="img1" width={160} height={160} />
        <p className="legend">Legend agrhh </p>
      </div>
      <div>
        <img src="/images/riral.jpg" alt="img2" />
        <p className="legend">Legend wfare</p>
      </div>
      <div>
        <img src="/images/riral.jpg" alt="img3" />
        <p className="legend">Legendbawfer</p>
      </div>
      <div>
        <img src="/images/riral.jpg" alt="img4" />
        <p className="legend">Legend gdr </p>
      </div>
      <div>
        <img src="/images/riral.jpg" alt="img5" />
        <p className="legend">Legend last second </p>
      </div>
      <div>
        <img src="/images/riral.jpg" alt="img6" />
        <p className="legend">Legend last </p>
      </div>
    </Carousel>
  );
}
