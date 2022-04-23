import React from "react";
import { Container } from "../../globalStyles";
import {
  SkillsSection,
  SkillsColumn,
  SkillsTitle,
  SkillsRow,
  SkillsWrapper,
  SkillsImage,
  SkillsTextWrapper,
} from "./SkillsStyles";
import { skillsData } from "../../data/SkillsData";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  return (
    <SkillsSection id="skills">
      <Container>
        <SkillsTextWrapper>
          <SkillsTitle>Skills</SkillsTitle>
        </SkillsTextWrapper>

        <SkillsRow ref={ref}>
          {skillsData.map((skills, skillsIndex) => (
            <SkillsColumn key={skillsIndex}>
              {skills.map((el, index) => (
                <SkillsWrapper
                  key={index}
                  className={
                    inView &&
                    `animate__animated animate__fadeInUp animate__delay-${el.duration}s animate__faster`
                  }
                >
                  <SkillsImage src={`./images/companies/${el.name}.png`} />
                </SkillsWrapper>
              ))}
            </SkillsColumn>
          ))}
        </SkillsRow>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
