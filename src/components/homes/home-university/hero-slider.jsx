import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const slider_data = [
  {
    id: 1,
    src: "https://d3nn873nee648n.cloudfront.net/900x600/20487/1-PA1049849.jpg",
    subtitle: "Welcome to AutoBazaar",
    title: "World Best Program Best University",
    sm_text:
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.",
    btn_text: "Read More",
  },
  {
    id: 2,
    src: "https://d3nn873nee648n.cloudfront.net/900x600/20487/1-PA1049848.jpg",
    subtitle: "World Best Program Best University",
    title: "World Best Program Best University",
    sm_text:
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.",
    btn_text: "Read More",
  },
  {
    id: 3,
    src: "https://d3nn873nee648n.cloudfront.net/1200x1800-new/20487/PS1047183.jpg",
    subtitle: "World Best Program Best University",
    title: "World Best Program Best University",
    sm_text:
      "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.",
    btn_text: "Read More",
  },
];

const HeroSlider = () => {
  const [showSlider, setShowSlider] = useState(true);
  const { mouseDirection, mouseReverse } = useMouseMoveUI();

  return (
    <div className="position-relative">
      {" "}
      <div className="position-absolute top-8 start-24 text-white text-decoration-none">
        <h6 className="position-relative text-white">
          Home {">"} Blog
          <span className="position-absolute bottom-0 start-0 w-100 custom-line-h"></span>
        </h6>
      </div>
      <SwiperSlide>
        <img
          data-transform-origin="center center"
          src="https://d3nn873nee648n.cloudfront.net/900x600/20487/1-PA1049848.jpg"
          className="swiper-lazy custom-image-s"
          alt="image"
        />

        <div className="thumbnail-bg-content custom-container-thumb">
          <style jsx>{`
            @keyframes floatAnimation {
              from {
                transform: translateY(0);
              }
              to {
                transform: translateY(-10px);
              }
            }
          `}</style>
          <div className="container AutoBazaar-animated-shape">
            <div className="row">
              <div className="">
                <div className="banner-content" style={{ padding: "3rem" }}>
                  <h6>Welcome to AutoBazaar Blogs</h6>
                  <h3 className="title">How to Boost Profit with AutoBid</h3>
                  <p style={{ color: "black" }}>
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia deserunt mollit
                  </p>
                  <div className="banner-btn">
                    <Link href="/blog-details">
                      <a
                        className="edu-btn btn-secondary custom-button-e"
                        style={{ backgroundColor: "#FFA51F" }}
                      >
                        Read More <i className="icon-4"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <ul className="shape-group">
        <motion.li
          className="shape-1 scene"
          animate={{
            x: mouseReverse(25).x,
            y: mouseReverse(25).y,
          }}
        ></motion.li>
        <motion.li
          className="shape-2 scene"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        ></motion.li>
        <li className="shape-3"></li>
      </ul>
    </div>
  );
};

export default HeroSlider;
