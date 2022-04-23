import React from "react";
import Content from "../components/Content/Content";
import Clients from "../components/Skills/Skills";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../data/ProjectsData";
import { Heading } from "../globalStyles";
import Articles from "../components/Articles/Articles";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      {window.innerWidth > 1000 && <Clients />}
      <Heading id="projects">Projects</Heading>
      <Content {...projectOne} />
      <Content {...projectTwo} />
      <Content {...projectThree} />
      <Content {...projectFour} />
      <Content {...projectFive} />
      <Articles />
    </>
  );
};

export default HomePage;
