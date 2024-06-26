'use client'
import React, { useEffect, useState } from "react";
import BlogSidebar from "../blog/blog-sidebar";
import BlogCommentForm from "../forms/blog-comment-form";
import CommentArea from "./comment-area";
import { fetchBlogByPublicId } from "../../utils/funcs/api_func/blog";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { FILE_BASE_URL } from "../../utils/constant";

const BlogDetailsArea = ({ blog }) => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState({})
  console.log('blogData', blogData,id)
  const fetchData =async()=>{
    const res = await fetchBlogByPublicId(id);

    if(res?.status === 'success'){
      setBlogData(res?.data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  const {title, created_at, image, description} = blogData;

  return (
    <div className="blog-details-area section-gap-equal">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-8">
            <div className="blog-details-content">
              <div className="entry-content">
                <span className="category">Developer</span>
                <h3 className="title">{title}</h3>
                <ul className="blog-meta">
                  <li>
                    <i className="icon-27"></i>
                    {dayjs(created_at).format('MMM DD YYYY')}
                  </li>
                  <li>
                    <i className="icon-28"></i>Com {blog?.comment}
                  </li>
                </ul>
                <div className="thumbnail">
                  <img
                     src={`${FILE_BASE_URL}/${image}`}
                    // src="https://edgecast-img.yahoo.net/mysterio/api/D7009424E23BD1A77B75277F45EE1195CA474F328B64C72BE2F648C61187B99E/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/04/17160136/2025-Toyota-Camry-SE-action-front-three-quarter.jpg"
                    alt="Blog Image"
                  />
                </div>
              </div>
              <p>{description}</p>

              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inc idid unt ut labore et dolore magna aliqua
                enim ad minim veniam, quis nostrud exerec tation ullamco laboris
                nis aliquip commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit sed quia consequuntur magni
                dolores.{" "}
              </p>

              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam.
              </p>
              <ul>
                <li>Aute irure dolor in reprehenderit</li>
                <li>Occaecat cupidatat non proident sunt in culpa</li>
                <li>Pariatur enim ipsam.</li>
              </ul> */}

              <blockquote>
                <p>
                  Lorem ipsum dolor amet con sectur elitadicing elit sed do
                  usmod tempor uincididunt enim minim veniam nostrud.
                </p>
                <h5 className="author">Simon Baker</h5>
              </blockquote>

              <h3 className="title">The Complete Camtasia</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam.{" "}
              </p>

              <div className="features-image">
                <div className="row g-md-5">
                  <div className="col-6">
                    <div className="thumb">
                      <img
                        src="https://edgecast-img.yahoo.net/mysterio/api/83543565272AE781ED54213DA3571CC2CFFF8AB7848934B92610A98AB15C33B8/autoblog/resizefill_w1240_h695;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/04/19101229/Qashqai_2024-17.jpg"
                        alt="Features Images"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="thumb">
                      <img
                        src="https://edgecast-img.yahoo.net/mysterio/api/EA4786599ADF046DA94DE84E7F4704AFA9C36EC2CE1A4AD0E3B8C5BC1B22AEEE/autoblog/resizefill_w1240_h695;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/04/19163505/premedia_24c0120_002.jpg"
                        alt="Features Images"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt
                ut labore et dolore magna aliqua enim ad minim veniam, quis
                nostrud exerec tation ullamco laboris nis aliquip commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit sed
                quia consequuntur magni dolores.{" "}
              </p>

              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam.
              </p>

              <h3 className="title">Intrinsic Motivation</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam.{" "}
              </p>

              <ul>
                <li>Aute irure dolor in reprehenderit</li>
                <li>Occaecat cupidatat non proident sunt in culpa</li>
                <li>Pariatur enim ipsam.</li>
              </ul>

              <div className="blog-share-area">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="blog-tags">
                      <h6 className="title">Tags:</h6>
                      <div className="tag-list">
                        <a href="#">Language</a>
                        <a href="#">eLearn</a>
                        <a href="#">Tips</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="blog-share">
                      <h6 className="title">Share on:</h6>
                      <ul className="social-share icon-transparent">
                        <li>
                          <a href="#">
                            <i className="icon-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-author">
              <div className="thumbnail">
                <img
                  src="https://edgecast-img.yahoo.net/mysterio/api/D7009424E23BD1A77B75277F45EE1195CA474F328B64C72BE2F648C61187B99E/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/04/17160136/2025-Toyota-Camry-SE-action-front-three-quarter.jpg"
                  alt="Author Images img-width-300"
                />
              </div>
              <div className="author-content">
                <h5 className="title">Edward Norton</h5>
                <p>
                  Enim ad minim veniam quis nostrud exercitation lamco laboris
                  nisi ex commodo consequat aute irure.
                </p>
                <ul className="social-share icon-transparent">
                  <li>
                    <a href="#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="blog-pagination">
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="blog-pagination-list prev-post">
                    <a href="#">
                      <i className="icon-west"></i>
                      <span>Instructional Design and Adult Learners</span>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="blog-pagination-list next-post">
                    <a href="#">
                      <span>Qualification for Students Satisfaction Rate</span>
                      <i className="icon-east"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*  Start Comment Area  */}
            <CommentArea />
            {/*  End Comment Area  */}
            <div className="comment-form-area">
              <h3 className="heading-title">Leave Your Comment Here</h3>
              {/* form start */}
              <BlogCommentForm />
              {/* form end */}
            </div>
          </div>

          <div className="col-lg-4">
            {/* sidebar start */}
            <BlogSidebar />
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
