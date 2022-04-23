import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
  font-size: 24px;
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #eeeeeed9;
  font-size: 24px;
`;

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  z-index: -32;
`;

export const FooterMain = styled.div`
  background: #5e86a1;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ConnectButton = styled(motion.button)`
  width: 250px;
  margin: 0 auto;
  padding: 15px 20px;
  font-weight: 700;
  font-size: 0.688rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  border-radius: 25px;
  border: none;
  background-color: white;
  color: #5238b1;
  cursor: pointer;
  // transition: all 0.4s ease-in;
  overflow: hidden;
  position: relative;

  &:before{
    content: ' ';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background:linear-gradient(120deg, transparent, rgba(42, 20, 84, .2), #2a547014 74%, transparent);
    transition: all 650ms;
}

  &:hover::before{
      left: 100%;
  }

`;
