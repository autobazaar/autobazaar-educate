import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../contexts/mouse-move-context";

const BreadCrumbSeven = ({ title, subtitle }) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div
      className="edu-breadcrumb-area"
      style={{
        height: "90vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
      }}
    >
      {/* Background Image */}
      <div
        className="background-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1572061486195-d811e12d0a10?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Add your background image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black color
          zIndex: 1, // Ensure it's above other elements
        }}
      ></div>

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

export default BreadCrumbSeven;
