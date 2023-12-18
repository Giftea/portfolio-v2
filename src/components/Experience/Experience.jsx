import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";

const Experience = ({ data }) => {
  const { resumeCv, skills, contributions } = data;
  return (
    <section className="section experience-section bg-g">
      <div className="container">
        <SectionHeading title="Skills & Contributions" subTitle="My Stack" />
        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="section-heading">
              {/* <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                {text}
              </p> */}
              <div
                className="btn-bar"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {skills.map((skill, index) => (
                  <ul key={index}>
                    <li>
                      <strong>{skill.title}</strong> - {skill.text}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-heading">
              <div
                className="btn-bar light-bg"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <p>{contributions.text} </p>
                {contributions.blog.map((contribution, index) => (
                  <ul key={index}>
                    <li>
                      <strong>{contribution}</strong>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 ps-xl-5">
            <ul className="resume-box">
              {experience.one.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>-{element.start} - {element.end}</span>
                    <label>-{element.subtitle}</label>
                  </div>
                  <h5>{element.title}</h5>
                </li>
              ))}
            </ul>
          </div> */}
          {/* <div className="col-lg-6 ps-xl-5">
            <ul className="resume-box">
              {experience.two.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>-{element.start} - {element.end}</span>
                    <label>-{element.subtitle}</label>
                  </div>
                  <h5>{element.title}</h5>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  data: PropTypes.object,
};

export default Experience;
