import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";
import VideoArea from "../home-distant-learning/video-area";

const accordion_items = [
  {
    id: "collapseOne",
    show: true,
    title: "How can I contact a school directly?",
    desc: "Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.",
  },
  {
    id: "collapseTwo",
    show: false,
    title: "How do I find a school where I want to study?",
    desc: "Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.",
  },
  {
    id: "collapseThree",
    show: false,
    title: "Where should I study abroad?",
    desc: "Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.",
  },
];

const FaqArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div className="edu-faq-area faq-style-2 bg-image">
      <VideoArea />
    </div>
  );
};

export default FaqArea;
