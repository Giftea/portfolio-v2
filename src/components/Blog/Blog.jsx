import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";

const Blog = ({ data }) => {
  // const [tempData, setTempData] = useState([]);

  // const getData = (imgLink, title, date, paragraphList) => {
  //   let tempData = [imgLink, title, date, paragraphList];
  //   setTempData((element) => [1, ...tempData]);
  // };

  return (
    <section id="blog">
      <div className="section blog-section bg-dark">
        <div className="container">
          <SectionHeading title="Latest Update" subTitle="My Blogs" />
          <div className="row gy-4">
            {data.toReversed().map((element, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay={element.delay ? element.delay : "500"}
              >
                {" "}
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="blog-post">
                    <div className="blog-post-img">
                      <img src={element.ImgLink} title="" alt="blog-img" />
                    </div>
                    <div className="blog-post-info">
                      <h6>{element.date}</h6>
                      <h2>
                        <p className="px_modal">{element.title}</p>
                      </h2>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  data: PropTypes.array,
};

export default Blog;
