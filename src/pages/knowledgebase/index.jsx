import SEO from "../../components/seo";
import { Wrapper } from "../../layout";

import kb_data from "../../data/kb-data.js";
import KnowledgeBaseMain from "../../components/knowledge-base-main";

const blog = kb_data[0];

const BlogDetails = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Knowledge Base"} />
      <KnowledgeBaseMain blog={blog} />
    </Wrapper>
  );
};

export default BlogDetails;
