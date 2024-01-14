import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Portfolio = ({ data }) => {
  return (
    <section>
      <div id="work" className="section work-section bg-g">
        <div className="container">
          <SectionHeading title="RECENT PROJECT" subTitle="My Work" />
          <div
            className="row gy-5 lightbox-gallery"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {data.map((element, index) => (
              <div className="col-lg-6" key={index}>
                <div className="work-box">
                  <div className="work-img">
                    <img src={element.ImgLink} title="" alt="portfolio image" />
                  </div>
                  <div className="work-text">
                    <h6>{element.subTitle}</h6>
                    <h4>{element.title}</h4>
                    <div className="btn-bar">
                      <a className="gallery-link" href={element.link}  target="_blank">
                        <Icon icon="bi:arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  data: PropTypes.array,
};

export default Portfolio;
