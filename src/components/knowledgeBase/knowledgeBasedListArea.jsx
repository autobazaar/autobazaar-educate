import React from "react";
import { LuLayers } from "react-icons/lu";
import { GoFileDirectory } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";

// data.js
export const knowledgeBaseData = [
  {
    categoryName: "AutoBazaar",
    categoryDescription: "All documents related to AutoBazaar.",
    files: [
      { name: "Catalogue", href: "/knowledgebase/1" },
      { name: "Catalogue", href: "/knowledgebase/2" },
      { name: "Catalogue", href: "/knowledgebase/3" },
      { name: "Catalogue", href: "/knowledgebase/1" },
      { name: "Catalogue", href: "/knowledgebase/2" },
      { name: "Catalogue", href: "/knowledgebase/3" },
    ],
  },
];

const KnowledgeBasedListArea = () => {
  return (
    <section className="section-gap-equal">
      <div
        className="container"
        style={{
          borderRadius: "10px",
          padding: "0rem 8rem",
          width: "100vw",
        }}
      >
        {knowledgeBaseData.map((category, index) => (
          <React.Fragment key={index}>
            <div
              className="knowledgeBased"
              style={{ borderBottom: "0.1px solid gray" }}
            >
              <div className="catalogue-wrapper">
                <LuLayers style={{ height: "50px", width: "50px" }} />
                <div className="catelogue_card">
                  <h6 style={{ fontSize: "2rem", height: "1rem" }}>
                    {category.categoryName}
                  </h6>
                  <p style={{ fontSize: "1.7rem", height: "0rem" }}>
                    {category.categoryDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="wrapper">
              {category.files.map((file, fileIndex) => (
                <div
                  key={fileIndex}
                  style={{
                    width: "33.33%",
                    borderBottom: "0.1px solid gray",
                  }}
                >
                  <div className="filediv">
                    <GoFileDirectory
                      style={{ height: "30px", width: "30px" }}
                    />
                    <h6 style={{ fontSize: "2rem", height: "1rem" }}>
                      {file.name}
                    </h6>
                  </div>
                  <div style={{ marginLeft: "3rem" }}>
                    <div className="file">
                      <FaRegFileAlt style={{ height: "20px", width: "20px" }} />
                      <Link
                        href={file.href}
                        style={{
                          fontSize: "1.5rem",
                          height: "0rem",
                          color: "#2c5cc5",
                          cursor: "pointer",
                        }}
                      >
                        {file.name}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeBasedListArea;
