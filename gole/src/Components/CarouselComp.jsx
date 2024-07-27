import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import img1 from "./calcihd.jpg";
import img2 from "./calcihd2.jpg";
import img3 from "./calcihd3.jpg";

import "./CarouselComp.css";

export default function CarouselComp({ product }) {
  return (
    <div className="">
      <Carousel>
        {product.images &&
          product.images.map((imageUrl, index) => (
            <div key={index} className="bg-black">
              <img
                src={"http://localhost:8000/uploads/" + imageUrl}
                alt={`Product Image ${index + 1}`}
                className="max-w-[60vh] max-h-[60vh]"
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
