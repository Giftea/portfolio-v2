import { useRef } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import validateForm from "./validateForm";

const Contact = ({ data }) => {
  const form = useRef();
  const { contactInfo, contactForm, text } = data;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handler for input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_wgfeh3k",
        "template_1jy8fcw",
        form.current,
        "user_bYXRceDsbpHZNyM397ser"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("ERROR", error.text);
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      data-scroll-index={5}
      className="section contact-section"
    >
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <SectionHeading title="Reach out me" subTitle="Contact" />
            <div className="contact-info">
              <p>{text}</p>
              <ul>
                {contactInfo.map((element, index) => (
                  <div
                    className="icon"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                  >
                    <Icon icon={`bi:${element.icon}`} />
                  </div>
                ))}
              </ul>
              {/* <div
                className="google-map"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <div className="ratio ratio-21x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
                    allowFullScreen=""
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <div
              className="contact-form bg-g"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              {/* <div className="contact-head">
                <h4>{contactForm.title}</h4>
                <p>{contactForm.text}</p>
              </div> */}
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contact-form"
                method="POST"
              >
                {/* <input type="hidden" name="from_name" value="Gift Uhiene" />
                <input type="hidden" name="replyto" value="custom@gmail.com" /> */}
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your name</label>
                      <input
                        name="name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.name}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        name="email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        name="subject"
                        id="subject"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.subject}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows={6}
                        className="form-control"
                        onChange={handleInputChange}
                        value={formData.message}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn dark w-100"
                        type="submit"
                        value="Send"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
};

export default Contact;
