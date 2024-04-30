import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";
import TestimonialArea from "../../abouts/about-3/testimonial-area";

const AdBanner = ({ home_4 }) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div
      className={`${
        home_4 ? "online-academy-cta-wrapper" : "university-cta-wrapper"
      } edu-cta-banner-area bg-image`}
    >
      <TestimonialArea />
    </div>
  );
};

export default AdBanner;
