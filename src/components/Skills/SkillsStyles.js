import styled from "styled-components";

export const SkillsSection = styled.div`
  padding: 100px 0;
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 70px 0;
    margin-top: 10rem;
  }
`;

export const SkillsTextWrapper = styled.div`
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

export const SkillsTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
`;

export const SkillsRow = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SkillsColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
  @media screen and (max-width: 1100px) {
    div:not(:first-child) {
      display: none;
    }
  }
`;

export const SkillsImage = styled.img`
  width: 90px;
  @media screen and (max-width: 1100px) {
    width: clamp(80px, 40vw, 400px);
    height: 60%;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 10px 40px;
  border-radius: 1rem;
  height: 110px;
  width: 100%;
  box-shadow: 0 -20px 40px 0 #2a547025;
  background-color: #fafeff;
  margin: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
