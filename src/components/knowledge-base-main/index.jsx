import React from "react";
import { Footer, Header } from "../../layout";

import AdBanner from "../homes/home/ad-banner";
import BlogDetailsArea from "./blog-details-area";
import ListArea from "../blog-list/list-area";
import BreadCrumbSeven from "../breadcrumb/breadcrumb-7";

const index = ({ blog }) => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadCrumbSeven
          title="Knowledge Base"
          subtitle="Knowledge Base Details"
        />
        <BlogDetailsArea catelogue={blog} />
        <AdBanner />
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default index;
