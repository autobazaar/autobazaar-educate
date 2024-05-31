import Link from "next/link";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";

const AdBanner = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="edu-cta-banner-area home-one-cta-wrapper bg-image">
      <div className="container">
        <div className="edu-cta-banner">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="section-title section-center"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <h2 className="title">
                  Level Up Your Action Game with AutoBazaar{" "}
                  <span className="color-secondary">Educate</span>
                </h2>
                <Link href="/">
                  <a className="edu-btn custom-style-bg">
                    Get started now{" "}
                    <i className="icon-4" style={{ color: "#111" }}></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <motion.li
              className="shape-01 scene"
              animate={{
                x: mouseReverse(30).x,
                y: mouseReverse(30).y,
              }}
            >
              <img src="/assets/images/cta/shape-10.png" alt="shape" />
            </motion.li>
            <motion.li
              className="shape-02 scene"
              animate={{
                x: mouseDirection(30).x,
                y: mouseDirection(30).y,
              }}
            >
              <img src="/assets/images/cta/shape-09.png" alt="shape" />
            </motion.li>
            <motion.li
              className="shape-03 scene"
              animate={{
                x: mouseDirection(30).x,
                y: mouseDirection(30).y,
              }}
            >
              <img src="/assets/images/cta/shape-08.png" alt="shape" />
            </motion.li>
            <motion.li
              className="shape-04 scene"
              animate={{
                x: mouseReverse(30).x,
                y: mouseReverse(30).y,
              }}
            >
              <img src="/assets/images/about/shape-13.png" alt="shape" />
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
