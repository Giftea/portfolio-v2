import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Blog = ({ data, isHome = true }) => {
  const navigate = useNavigate();
  const blogData = isHome ? data.slice(0, 8) : data;

  const scrollToTop = () => {
    scroll.scrollToTop();
    console.log('first')
  };

  scrollToTop()

  return (
    <section id="blog">
      <div className="section blog-section bg-dark">
        <div className="container">
          {!isHome && (
            <button className="px-btn my" onClick={() => navigate("/")}>
              <Icon icon="ep:back" />
              Go Back
            </button>
          )}
          <SectionHeading title="Latest Update" subTitle="My Blogs" />
          <div className="row gy-4">
            {blogData.toReversed().map((element, index) => (
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
          {isHome && (
            <center>
              {" "}
              <button onClick={() => navigate("./blog")} className="px-btn my">
                View All
                <Icon icon="bi:arrow-up-right" />
              </button>
            </center>
          )}
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  data: PropTypes.array,
};

export default Blog;
