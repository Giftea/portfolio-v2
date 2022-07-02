import React from "react";
import { Container } from "../../globalStyles";
import {
  AboutSection,
  AboutTitle,
  AboutTextsWrapper,
  AboutWrapper,
  AboutImage,
  AboutImg,
  AboutTextWrapper,
  AboutImageWrapper,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutTextsWrapper>
          <AboutTitle>About Me</AboutTitle>
        </AboutTextsWrapper>
        <AboutWrapper>
          <AboutImageWrapper>
            <AboutImage>
              <AboutImg src="https://res.cloudinary.com/dvxrsopw3/image/upload/v1656761077/me_wvrbnd.jpg" />
            </AboutImage>
          </AboutImageWrapper>
          <AboutTextWrapper>
            <p>
              With a BSc in Human Anatomy from the University of Port Harcourt
              in Nigeria, I am a self-taught Frontend Developer. I started
              coding in my second year of university and have been hooked ever
              since.
              <br /> <br /> Professionally, I mostly use HTML5, CSS3,
              JavaScript, TypeScript, React.js/Nextjs, Node.js, Bootstrap,
              TailwindCSS, Material UI, Materialize, Ant Design e.t.c.
              <br /> <br /> I appreciate the constant learning that comes with
              my profession, and I have a{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://giftea.hashnode.dev"
              >
                blog {" "}
              </a>
              where I share new concepts and approaches I've learnt.<br /> <br /> My favorite
              pastimes are reading, coding, writing, and listening to music.
            </p>
          </AboutTextWrapper>
        </AboutWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
