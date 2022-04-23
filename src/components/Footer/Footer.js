import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBlog, FaTwitter } from "react-icons/fa";
import "./footer.css";
import {
  FooterContainer,
  FooterMain,
  FooterSubHeading,
  SocialIcons,
  SocialIconLink,
  ConnectButton,
} from "./FooterStyles";
import Modal from "../Modal/Modal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
  };

  return (
    <>
      <FooterContainer>
        <div className="wave wave1"> </div>
        <div className="wave wave2"> </div>
        <div className="wave wave3"> </div>
        <div className="wave wave4"> </div>
      </FooterContainer>
      <FooterMain>
        <FooterSubHeading>Let's Connect!</FooterSubHeading>
        <ConnectButton onClick={toggleModal}>Contact Me</ConnectButton>
        <SocialIcons>
          <SocialIconLink
            href="https://github.com/Giftea"
            target="blank"
            aria-label="Github"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.linkedin.com/in/gift-uhiene"
            target="blank"
            aria-label="Instagram"
          >
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink
            href="https://twitter.com/dev_giftea"
            target="blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink
            href="https://giftea.hashnode.dev/"
            target="blank"
            aria-label="Blog"
          >
            <FaBlog />
          </SocialIconLink>
        </SocialIcons>
      </FooterMain>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Footer;
