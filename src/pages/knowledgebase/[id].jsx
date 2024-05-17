import { useRouter } from "next/router";
import React from "react";
import SEO from "../../components/seo";

import kb_data from "../../data/kb-data.js";

import { Wrapper } from "../../layout";
import KnowledgeBaseMain from "../../components/knowledge-base-main";

const DynamicBlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = kb_data.find((item) => Number(item.id) === Number(id));
  return (
    <Wrapper>
      <SEO pageTitle={"Knowledge Base"} />
      <KnowledgeBaseMain blog={blog} />
    </Wrapper>
  );
};

export default DynamicBlogDetails;

export async function getStaticPaths() {
  const paths = kb_data.map((blog) => {
    return {
      params: {
        id: `${blog.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
