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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Eg : How to update the items from a list"
                />
                <CiSearch
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "white",
                    position: "relative",
                    right: "1rem",
                    paddingRight: "1.5rem",
                  }}
                />
              </div>
              <p style={{ marginTop: "15px" }}>Home {">"} Knowledge Base</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          bottom: "10rem",

          zIndex: "999",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "150px",
            width: "350px",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <RiArticleLine
            style={{ height: "80px", width: "80px", color: "#FFA51F" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h6 style={{ fontSize: "2rem", position: "relative", top: "2rem" }}>
              Browse Articles
            </h6>
            <p>
              Explore How-To's and learn <br /> best practices from our
              knowledge base
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "150px",
            width: "350px",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <TfiTicket
            style={{ height: "80px", width: "80px", color: "#FFA51F" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h6 style={{ fontSize: "2rem", position: "relative", top: "2rem" }}>
              Raise ticket
            </h6>
            <p>
              Explore How-To's and learn <br /> best practices from our
              knowledge base
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "150px",
            width: "350px",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <RiContactsBook3Fill
            style={{ height: "80px", width: "80px", color: "#FFA51F" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
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
