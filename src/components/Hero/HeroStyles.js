import styled from "styled-components";
import { Section } from "../../globalStyles";
import { motion } from "framer-motion";

export const HeroSection = styled(Section)`
  background-color: #4c4177;
  background-image: linear-gradient(315deg, #4c4177 20%, #2a5470 74%);
  background-size: cover;
  background-attachment: fixed;
  z-index: 11;
  align-items: center;
  height: 640px;
  position: relative;
  display: flex;
  @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 992px) {
    height: 120vh;
  }
`;

export const HeroImage = styled.img`
  z-index: 10;
  width: 100%;
  position: absolute;
  left: 0;
  object-fit: cover;
  &.pattern {
    height: 100%;
    max-height: 100%;
    top: 0;
  }
  &.guy {
    bottom: -1px;
  }
`;

export const ImageCharacter = styled(motion.img)`
  z-index: 11;
  width: 100%;
  position: absolute;
  width: clamp(90px, 15vw, 200px);
  left: auto;
  &.one {
    top: 4rem;
    right: 200px;
    width: clamp(170px, 15vw, 230px);
    @media screen and (max-width: 768px) {
      right: 50%;
      transform: translateX(50%);
    }
  }
  &.two {
    bottom: 4rem;
    right: 200px;
    z-index: 100;
    @media screen and (max-width: 768px) {
      right: 50px;
    }
  }
  &.three {
    top: 3rem;
    left: 150px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const CharacterContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const HeroContent = styled.div`
  width: 100%;
  padding: 0 15px;
  z-index: 10;
  position: relative;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: clamp(2.8rem, 6vw, 6.7rem);
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: white;
`;

export const HeroText = styled.div`
  text-align: center;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  height: 170px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
`;

export const HeroButton = styled(motion.button)`
  position: absolute;
  width: 250px;
  margin: 0 auto;
  padding: 15px 20px;
  bottom: calc(100vh - 100px);
  right: 50%;
  transform: translate(50%);
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
  transition: all 0.4s ease-in;
  z-index: 3000000;
  overflow: hidden;
  &.corner {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    width: 64px;
    height: 64px;
    padding: 10px;
    background-color: #4c4177;
    border-radius: 50%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &:before{
      content: ' ';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background:linear-gradient(120deg, transparent, rgba(255,255,255, .3), transparent);
      transition: all 650ms;
  }
  
    &:hover::before{
        left: 100%;
    }
  }
  
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
