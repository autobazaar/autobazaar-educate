import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const HeroArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="hero-banner hero-style-4 bg-image ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="banner-content">
              <h1
                className="title"
                data-sal-delay="100"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                Learn the Technique that can Double Your Profits!
              </h1>
              <p
                data-sal-delay="200"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                Level up Your AUCTION Game
              </p>
              <div
                className="banner-btn"
                data-sal-delay="400"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <Link href="/">
                  <a
                    className="edu-btn text-dark "
                    style={{ backgroundColor: "#ffa51f" }}
                  >
                    Get Started <i className="icon-4 text-dark"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-gallery">
        <Thumbnail
          num={"1"}
          slide={"slide-up"}
          img={
            "https://d3nn873nee648n.cloudfront.net/900x600/100007/220-ZM1012773.jpg"
          }
        />
        <Thumbnail
          num={"2"}
          slide={"slide-down"}
          img={
            "https://d3nn873nee648n.cloudfront.net/900x600/16960/220-SM736834.jpg"
          }
        />
        <Thumbnail
          num={"3"}
          slide={"slide-right"}
          img={
            "https://d3nn873nee648n.cloudfront.net/900x600/20851/300-SM1085050.jpg"
          }
        />

        <img
          className="position-relative mt-n5 custom-img rotateit"
          src="/assets/images/about/shape-44.png"
          alt="Shape"
        />

        <div
          className="online-support"
          data-sal-delay="600"
          data-sal="slide-right"
          data-sal-duration="1000"
        >
          <div className="inner">
            <div className="icon">
              <i className="icon-29"></i>
            </div>
            <div className="content">
              <span className="subtitle">Online Support </span>
              <h4 className="title">
                <a href="/">+08828820306</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down-btn">
        <a className="scroll-btn" href="#categories">
          <i className="icon-41"></i>
        </a>
      </div>
      <ul className="shape-group">
        <motion.li
          className="shape-1 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseReverse(25).x,
            y: mouseReverse(25).y,
          }}
        >
          <img src="/assets/images/others/shape-17.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-2 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        >
          <img src="/assets/images/banner/shape-03.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-3 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseReverse(25).x,
            y: mouseReverse(25).y,
          }}
        >
          <img src="/assets/images/faq/shape-09.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-4 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        >
          <img src="/assets/images/others/shape-15.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-5 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        >
          <img src="/assets/images/others/shape-16.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-6 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseReverse(25).x,
            y: mouseReverse(25).y,
          }}
        >
          <img src="/assets/images/faq/shape-12.png" alt="Shape" />
        </motion.li>

        <motion.li
          className="shape-7 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
          animate={{
            x: mouseDirection(25).x,
            y: mouseDirection(25).y,
          }}
        >
          <img src="/assets/images/others/shape-17.png" alt="Shape" />
        </motion.li>

        <li
          className="shape-8 scene"
          data-sal-delay="1000"
          data-sal="fade"
          data-sal-duration="1000"
        >
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default HeroArea;

// Thumbnail
const Thumbnail = ({ num, slide, img }) => {
  return (
    <div
      className={`thumbnail thumbnail-${num}`}
      data-sal-delay="500"
      data-sal={slide}
      data-sal-duration="1000"
    >
      <img src={`${img}`} alt="Girl Image" />
    </div>
  );
};
