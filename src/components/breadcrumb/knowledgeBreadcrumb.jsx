import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiArticleLine } from "react-icons/ri";
import { TfiTicket } from "react-icons/tfi";
import { RiContactsBook3Fill } from "react-icons/ri";

const BreadcrumbSix = ({ title, page }) => {
  return (
    <>
      <div
        className="edu-breadcrumb-area breadcrumb-style-2 "
        style={{ backgroundColor: "#1D1E4E" }}
      >
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="page-title">
              <h2 className="hello" style={{ color: "#fff" }}>
                Hi, how can we help you?
              </h2>
              <div className="kn-head">
                <input
                  type="text"
                  placeholder="Eg : How to update the items from a list"
                />
                <CiSearch className="kn-cisearch" />
              </div>
              <p style={{ marginTop: "15px" }}>Home {">"} Knowledge Base</p>
            </div>
          </div>
        </div>
      </div>
      <div className="kn-main">
        <div className="kn-maintwo">
          <RiArticleLine
            style={{ height: "80px", width: "80px", color: "#FFA51F" }}
          />
          <div className="d-flex flex-column align-items-start justify-content-center">
            <h6 style={{ fontSize: "2rem", position: "relative", top: "2rem" }}>
              Browse Articles
            </h6>
            <p>
              Explore How-To's and learn <br /> best practices from our
              knowledge base
            </p>
          </div>
        </div>
        <div className="knthree">
          <TfiTicket
            style={{ height: "80px", width: "80px", color: "#FFA51F" }}
          />
          <div className="d-flex flex-column align-items-start justify-content-center">
            <h6 style={{ fontSize: "2rem", position: "relative", top: "2rem" }}>
              Raise ticket
            </h6>
            <p>
              Explore How-To's and learn <br /> best practices from our
              knowledge base
            </p>
          </div>
        </div>
        <div className="knfour">
          <RiContactsBook3Fill
            style={{ height: "80px", width: "80px", color: "#FFA51F" }}
          />
          <div className="d-flex flex-column align-items-start justify-content-center">
            <h6 style={{ fontSize: "2rem", position: "relative", top: "2rem" }}>
              Contact Us
            </h6>
            <p>
              Explore How-To's and learn <br /> best practices from our
              knowledge base
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbSix;
