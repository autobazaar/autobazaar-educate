import React from "react";

const CommentArea = () => {
  return (
    <div className="comment-area">
      <h3 className="heading-title">Comments</h3>
      <div className="comment-list-wrapper">
        <div className="comment">
          <div className="thumbnail">
            <img
              src="https://media.gettyimages.com/id/1227618801/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=612x612&w=0&k=20&c=scUAkj-WvWbzLvTM0auQuNEvsNdbni_Tws_QIXIR0UI="
              alt="Comment Images"
            />
          </div>
          <div className="comment-content">
            <h5 className="title">Haley Bennet</h5>
            <span className="date">Oct 10, 2021</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="reply-btn-wrapper">
              <a className="reply-btn" href="#">
                Reply
              </a>
            </div>
          </div>
        </div>

        <div className="comment comment-reply">
          <div className="thumbnail">
            <img
              src="https://media.gettyimages.com/id/1227618801/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=612x612&w=0&k=20&c=scUAkj-WvWbzLvTM0auQuNEvsNdbni_Tws_QIXIR0UI="
              alt="Comment Images"
            />
          </div>
          <div className="comment-content">
            <h5 className="title">Simon Baker</h5>
            <span className="date">Oct 10, 2021</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="reply-btn-wrapper">
              <a className="reply-btn" href="#">
                Reply
              </a>
            </div>
          </div>
        </div>

        <div className="comment">
          <div className="thumbnail">
            <img
              src="https://media.gettyimages.com/id/1227618801/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=612x612&w=0&k=20&c=scUAkj-WvWbzLvTM0auQuNEvsNdbni_Tws_QIXIR0UI="
              alt="Comment Images"
            />
          </div>
          <div className="comment-content">
            <h6 className="title">Richard Gere</h6>
            <span className="date">Oct 10, 2021</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="reply-btn-wrapper">
              <a className="reply-btn" href="#">
                Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentArea;
