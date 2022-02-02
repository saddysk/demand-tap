import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./css/Carousel.css";

export default function Carousel() {
  const photos = [
    "https://freshdigital.io/wp-content/uploads/2021/03/Cyberseucrity-Client-Rainbowlogo-vn.png",
    "https://freshdigital.io/wp-content/uploads/2021/03/Cybersecurity-Client-Myrewards.png",
    "https://freshdigital.io/wp-content/uploads/2021/03/Cybersecurity-Client-Diamond-Star-Financials.png",
    "https://freshdigital.io/wp-content/uploads/2021/03/New-Project8.png",
  ];

  const settingsLarge = {
    dots: false,
    infinite: false,
    slidesToShow: 3.4,
    slidesToScroll: 3.4,
  };
  const settingsSmall = {
    dots: false,
    infinite: false,
    slidesToShow: 1.4,
    slidesToScroll: 1,
  };

  let settings;
  const { innerWidth: width, innerHeight: height } = window;
  if (width < 520) {
    settings = settingsSmall;
  } else {
    settings = settingsLarge;
  }

  return (
    <div className="container" id="companies">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div>
              <img className="w-75 m-auto" src={photo} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
