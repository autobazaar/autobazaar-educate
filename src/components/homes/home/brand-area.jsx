const brand_contents = {
  pre_title: "Our Certifications",
  title: "Be Certified, Get More Benefits",
  text: "Not Just Profits, But also Get Special Perks With Our Certification Courses.",
  brands: [
    "assets/images/brand/brand-01.png",
    "assets/images/brand/brand-02.png",
  ],
};

const { pre_title, title, text, brands } = brand_contents;

const BrandArea = () => {
  return (
    <div className="edu-brand-area brand-area-1 gap-top-equal">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="brand-section-heading">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">{pre_title}</span>
                <h2 className="title">{title}</h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <p>{text}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 80,
                flexWrap: "wrap",
              }}
            >
              <img
                style={{ width: "250px" }}
                src="/assets/images/inno/cert1.jpeg"
                alt="Brand Logo"
              />
              <img
                style={{ width: "250px" }}
                src="/assets/images/inno/cert2.jpeg"
                alt="Brand Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
