'use client'
import SEO from "../components/seo";
import { Wrapper } from "../layout";
import BlogListMain from "../components/blog-list";
import { useEffect, useState } from "react";
import { fetchAllBlogs } from "../utils/funcs/api_func";

const BlogList = () => {
  const [blog, setBlog] = useState([])

  const fetchData =async()=>{
    const res = await fetchAllBlogs();

    if(res?.status === 'success'){
      setBlog(res?.data?.result)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log('blog', blog)
  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <BlogListMain blog={blog} />
    </Wrapper>
  );
};

export default BlogList;
