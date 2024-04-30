import React from "react";

import CourseDetailsMain from "../components/course-detailss/index";

import SEO from "../components/seo";
import { course_data } from "../data";
import { Wrapper } from "../layout";
import KnowledgeBaseContainer from "../components/knowledgeBase";

const course = course_data[0];

const KnowledgeBase = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Knowledge Base"} />
      <KnowledgeBaseContainer course={course} />
    </Wrapper>
  );
};

export default KnowledgeBase;
