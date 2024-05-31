import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../contexts/mouse-move-context";

const BreadCrumbSeven = ({ title, subtitle }) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div
      className="edu-breadcrumb-area d-flex align-items-center justify-content-center position-relative"
      style={{
        height: "90vh",
      }}
    >
      {/* Background Image */}
      <div className="background-image my-background"></div>

      {/* Overlay */}
      <div className="overlay my-overlay"></div>

      <div className="container" style={{ zIndex: 999 }}>
        <div className="breadcrumb-inner">
          <div className="page-title">
            <h1 className="title text-white">{title}</h1>
          </div>
          <ul className="edu-breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a className="text-white">Home</a>
              </Link>
            </li>
            <li className="separator">
              <i className="text-white icon-angle-right"></i>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Pages
              </a>
            </li>
            <li className="separator">
              <i className="text-white icon-angle-right"></i>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              {subtitle}
            </li>
          </ul>
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-1">
          <span></span>
        </li>
        <motion.li
          className="shape-2 scene"
          animate={{
            x: mouseReverse(40).x,
            y: mouseReverse(40).y,
          }}
        >
          <img src="/assets/images/about/shape-13.png" alt="shape" />
        </motion.li>
        <motion.li
          className="shape-3 scene"
          animate={{
            x: mouseDirection(40).x,
            y: mouseDirection(40).y,
          }}
        >
          <img src="/assets/images/about/shape-15.png" alt="shape" />
        </motion.li>
        <li className="shape-4">
          <span></span>
        </li>
        <motion.li
          className="shape-5 scene"
          animate={{
            x: mouseReverse(40).x,
            y: mouseReverse(40).y,
          }}
        >
          <img src="/assets/images/about/shape-07.png" alt="shape" />
        </motion.li>
      </ul>
      <img
        className="rotateit position-absolute bottom-0 mb-neg-10 z-index-999"
        src="/assets/images/about/shape-44.png"
        alt="Shape"
        width={200}
      />
    </div>
  );
};

export default BreadCrumbSeven;
