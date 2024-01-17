import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.scss";

function Hero() {
  const swiper1 = useRef(null);
  useEffect(() => {
    Swiper.use([Navigation]);
    swiper1.current = new Swiper(".swiper", {
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide first">
            <div>
              <p>Book a table for yourself at a time convient for you</p>
              <button>Book a table</button>
            </div>
          </div>
          <div className="swiper-slide second">
            <div>
              <p>Book a table for yourself at a time convient for you</p>
              <button>Book a table</button>
            </div>
          </div>
          <div className="swiper-slide third">
            <div>
              <p>Book a table for yourself at a time convient for you</p>
              <button>Book a table</button>
            </div>
          </div>
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev" style={{ color: "white" }}></div>
        <div className="swiper-button-next" style={{ color: "white" }}></div>
      </div>
    </div>
  );
}

export default Hero;
