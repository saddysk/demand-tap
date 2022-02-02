import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./css/Carousel.css";
import Phone from "./images/phone.png";

export default function Carousel() {
  const featureDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi laborum voluptatibus accusantium porro aut aliquam nisi illum mollitia quasi. Ipsam magnam, molestias sunt eveniet iure ea et officia vitae. Magni a amet sapiente rem consectetur suscipit similique esse distinctio. Neque voluptatum veniam ad nemo reprehenderit doloribus vero necessitatibus iusto deserunt inventore molestias illo in culpa, qui labore dolores exercitationem.";
  const featureContent = [
    {
      imageUrl: Phone,
      description: featureDescription,
    },
    {
      imageUrl: Phone,
      description: featureDescription,
    },
    {
      imageUrl: Phone,
      description: featureDescription,
    },
    {
      imageUrl: Phone,
      description: featureDescription,
    },
  ];

  const settings = {
    dots: true,
  };
  return (
    <div className="container" id="features">
      <Slider {...settings}>
        {featureContent.map((content) => {
          return (
            <div
              className="row d-flex align-items-center justify-content-center ms-lg-0 ms-1"
              id="feature1"
            >
              <img
                className="col-lg-3 col-8"
                src={content.imageUrl}
                alt="demo view"
              />
              <span className="col-lg-6 ms-lg-5 text-lg-start text-center">
                {content.description}
              </span>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
