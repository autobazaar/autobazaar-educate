import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../contexts/mouse-move-context";

const BreadcrumbThree = ({ title, subtitle }) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="edu-breadcrumb-area containerfaq">
      {/* Background Image */}
      <div className="background-image background-imagefaq"></div>

      {/* Overlay */}
      <div className="overlay overlayfaq"></div>

      <div className="container" style={{ zIndex: 999 }}>
        <div className="breadcrumb-inner">
          <div className="page-title">
            <h1 style={{ color: "#FFFFFF" }} className="title">
              {title}
            </h1>
          </div>
          <ul className="edu-breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a style={{ color: "#FFFFFF" }}>Home</a>
              </Link>
            </li>
            <li className="separator">
              <i style={{ color: "#FFFFFF" }} className="icon-angle-right"></i>
            </li>
            <li className="breadcrumb-item">
              <a style={{ color: "#FFFFFF" }} href="#">
                Pages
              </a>
            </li>
            <li className="separator">
              <i style={{ color: "#FFFFFF" }} className="icon-angle-right"></i>
            </li>
            <li
              style={{ color: "#FFFFFF" }}
              className="breadcrumb-item active"
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
        style={{
          position: "absolute",
          bottom: "-10.2rem",
          zIndex: "999",
        }}
        className="rotateit"
        src="/assets/images/about/shape-44.png"
        alt="Shape"
        width={200}
      />
    </div>
  );
};

export default BreadcrumbThree;
