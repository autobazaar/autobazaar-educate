import Link from "next/link";
import React from "react";
import { blog_data } from "../../data";
import PaginationTwo from "../../ui/paginatio-2";
import BlogSidebar from "../blog/blog-sidebar";
import { LuLayers } from "react-icons/lu";
import { GoFileDirectory } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";

const blog_items = blog_data.filter((blog) => blog.blog_list);

const KnowledgeBasedListArea = () => {
  return (
    <section className="section-gap-equal">
      <div
        className="containe"
        style={{
          borderRadius: "10px",
          padding: "0rem 8rem",
          width: "100vw",
        }}
      >
        <div
          className="knowledgeBased"
          style={{ borderBottom: "0.1px solid gray" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "2rem",
            }}
          >
            <LuLayers style={{ height: "50px", width: "50px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <h6 style={{ fontSize: "2rem", height: "1rem" }}>AutoBazaar</h6>
              <p style={{ fontSize: "1.7rem", height: "0rem" }}>
                All documents related to AutoBazaar.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "33.33%",
              //   borderRight: "0.1px solid gray",
              borderBottom: "0.1px solid gray",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                padding: "1.5rem",
              }}
            >
              <GoFileDirectory style={{ height: "30px", width: "30px" }} />
              <h6 style={{ fontSize: "2rem", height: "1rem" }}>Catalogue</h6>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "33.33%",
              //   borderRight: "0.1px solid gray",
              borderBottom: "0.1px solid gray",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                padding: "1.5rem",
              }}
            >
              <GoFileDirectory style={{ height: "30px", width: "30px" }} />
              <h6 style={{ fontSize: "2rem", height: "1rem" }}>Catalogue</h6>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "33.33%",

              borderBottom: "0.1px solid gray",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                padding: "1.5rem",
              }}
            >
              <GoFileDirectory style={{ height: "30px", width: "30px" }} />
              <h6 style={{ fontSize: "2rem", height: "1rem" }}>Catalogue</h6>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "33.33%",

              borderBottom: "0.1px solid gray",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                padding: "1.5rem",
              }}
            >
              <GoFileDirectory style={{ height: "30px", width: "30px" }} />
              <h6 style={{ fontSize: "2rem", height: "1rem" }}>Catalogue</h6>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "33.33%",

              borderBottom: "0.1px solid gray",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                padding: "1.5rem",
              }}
            >
              <GoFileDirectory style={{ height: "30px", width: "30px" }} />
              <h6 style={{ fontSize: "2rem", height: "1rem" }}>Catalogue</h6>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "33.33%",

              borderBottom: "0.1px solid gray",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                padding: "1.5rem",
              }}
            >
              <GoFileDirectory
                style={{ height: "30px", width: "30px", color: "#0C0C1F" }}
              />
              <h6 style={{ fontSize: "2rem", height: "1rem" }}>Catalogue</h6>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  padding: "1rem",
                }}
              >
                <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                <p
                  style={{
                    fontSize: "1.5rem",
                    height: "0rem",
                    color: "#2c5cc5",
                  }}
                >
                  Catalogue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBasedListArea;
