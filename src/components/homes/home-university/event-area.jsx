import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";
import { event_data } from "../../../data";
import EventItem from "../../event-grid/event-item";

const EventArea = ({ event_2 }) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <div
      className={`edu-event-area ${
        event_2 ? "event-area-2" : "event-area-1 gap-large-text"
      }`}
    >
      <div className="container AutoBazaar-animated-shape">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title">Events & News</span>
          <h2 className="title">Seminars & Webinars</h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
        </div>

        <div className="row g-5">
          {event_data.slice(0, 3).map((event) => {
            const { delay, id } = event;
            return (
              <div
                key={id}
                className="col-lg-4 col-md-6"
                data-sal-delay={delay}
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <div className="edu-event event-style-1">
                  <EventItem item={event} />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="event-view-all-btn"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="1200"
        >
          <h6 className="view-text">
            For Latest Events from AutoBazaar.
            <Link href="/">
              <a className="btn-transparent" style={{ color: "#FFA51F" }}>
                Be in Touch{" "}
                <i className="icon-4 " style={{ color: "#FFA51F" }}></i>
              </a>
            </Link>
          </h6>
        </div>

        <ul className="shape-group">
          <li
            className="shape-1"
            data-sal-delay="500"
            data-sal="fade"
            data-sal-duration="200"
          >
            <img
              style={{
                position: "relative",
                left: "1.85rem",
                top: "1.5rem",
              }}
              className="rotateit"
              src="/assets/images/about/shape-44.png"
              alt="Shape"
              width={150}
            />
          </li>
          <motion.li
            className="shape-2 scene"
            data-sal-delay="500"
            data-sal="fade"
            data-sal-duration="200"
            animate={{
              x: mouseReverse(30).x,
              y: mouseReverse(30).y,
            }}
          >
            <span></span>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default EventArea;