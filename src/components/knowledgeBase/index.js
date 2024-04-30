import React from "react";
import { Footer, Header } from "../../layout";
import CourseBreadcrumb from "../breadcrumb/breadcrumb-5";

import KnowledgeBaseBreadCrumb from "../breadcrumb/knowledgeBreadcrumb";
import CourseDetailsArea from "../course-detailss/course-details-area";
import ListArea from "../blog-list/list-area";
import AdBanner from "../homes/home-university/ad-banner";
import KnowledgeBasedListArea from "./knowledgeBasedListArea";

const KnowledgeBaseContainer = ({ course }) => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <KnowledgeBaseBreadCrumb course={course} subtitle="Knowledge Base" />
        <KnowledgeBasedListArea />

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default KnowledgeBaseContainer;
