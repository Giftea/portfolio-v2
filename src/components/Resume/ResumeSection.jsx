import PropTypes from "prop-types";
import SingleResume from "./SingleResume";
import SectionHeading from "../SectionHeading/SectionHeading";

const ResumeSection = ({ data }) => {
  const { experience } = data;
  return (
    <section id="resume" className="section">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div className="row">
        <SectionHeading title="My Experience" subTitle="Experience" />
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {experience.one.map((experience, index) => (
                  <SingleResume element={experience} key={index} />
                ))}
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {experience.two.map((experience, index) => (
                  <SingleResume element={experience} key={index} />
                ))}
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

ResumeSection.propTypes = {
  data: PropTypes.object,
};

export default ResumeSection;
