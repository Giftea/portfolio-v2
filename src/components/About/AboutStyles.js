import styled from "styled-components";

export const AboutSection = styled.div`
  padding: 100px;
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 70px 0;
    margin-top: 10rem;
  }
`;

export const AboutTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
`;

export const AboutTextsWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;

  &:before {
    width: 40px;
    height: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: #875ebc;
    transform: translateX(-50%);
  }
`;

export const AboutWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutImageWrapper = styled.div`
  @media screen and (max-width: 768px) {
    width: unset;
  }
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const AboutTextWrapper = styled.div`
  padding: 50px;
  text-align: justify;
  width: 65%;
  @media screen and (max-width: 768px) {
    padding: 0px;
    padding-top: 30px;
    width: unset;
  }
`;
