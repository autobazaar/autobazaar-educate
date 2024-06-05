'use client'
import Link from "next/link";
import React from "react";
import { blog_data } from "../../data";
import PaginationTwo from "../../ui/paginatio-2";
import BlogSidebar from "../blog/blog-sidebar";
import { FILE_BASE_URL } from "../../utils/constant";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { fetchAllBlogs } from "../../utils/funcs/api_func/blog";

const blog_items = blog_data.filter((blog) => blog.blog_list);

const ListArea = () => {
  // console.log('blog', blog)
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentpage] = useState(1)
  const [pagination, setPagination] = useState({});
  console.log('pagination', pagination) 

  const fetchData =async(page)=>{
    const res = await fetchAllBlogs(String(page));

    if(res?.status === 'success'){
      setBlog(res?.data?.result)
      setPagination(res?.data?.meta)
    }
  }

  useEffect(() => {
    fetchData(currentPage)
  }, [currentPage])
  
  return (
    <section className="section-gap-equal">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-8">
            {blog?.map((item) => {
              const { id, image, title, created_at, description, comment } = item;
              console.log('description', description)
              console.log(id);
              return (
                <div
                  key={id}
                  className="edu-blog blog-style-list"
                  // data-sal-delay="150"
                  // data-sal="slide-up"
                  // data-sal-duration="800"
                >
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href={`/blog-details/${id}`}>
                        <a>
                          <img
                         src={`${FILE_BASE_URL}/${image}`}
                            // src={'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg'}
                            alt={title}
                            style={{ width: "300px" }}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href={`/blog-details/${id}`}>
                          <a>{title}...</a>
                        </Link>
                      </h5>
                      <ul className="blog-meta">
                        <li>
                          <i className="icon-27"></i>
                          {dayjs(created_at).format('MMM DD YYYY')}
                        </li>
                        <li>
                          <i className="icon-28"></i>Com {comment}
                        </li>
                      </ul>
                      <p>{description}</p>
                      <div className="read-more-btn">
                        <Link href={`/blog-details/${id}`}>
                          <a className="edu-btn btn-border btn-medium custom-style-bg">
                            Learn More <i className="icon-4"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <ul 
            className="edu-pagination top-space-30 justify-content-start"
            >
              {/* pagination start */}
              <PaginationTwo pagination={pagination} currentPage={currentPage} setCurrentpage={setCurrentpage} />
              {/* pagination end */}
            </ul>
          </div>

          <div className="col-lg-4">
            {/* sidebar start */}
            <BlogSidebar />
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListArea;
