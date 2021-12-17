import React from 'react';
import { Container } from '../../globalStyles';
import {
	FeatureSection,
	FeatureTitle,
	FeatureTextWrapper,
	AboutWrapper,
	AboutImage,
	AboutTextWrapper,
	AboutImageWrapper
} from './FeaturesStyles';

const Features = () => {
	return (
		<FeatureSection id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>About Me</FeatureTitle>
				</FeatureTextWrapper>
				<AboutWrapper>
					<AboutImageWrapper><AboutImage  src = './images/about/me.jpg' /></AboutImageWrapper>
					<AboutTextWrapper>
						<p>
						I am an experienced frontend developer focused on creating usable pieces of code for humans.
						I’m so passionate about building highly performant and maintainable web applications that help businesses meet their goals.
						My expertise cuts across several programming languages, frameworks and tools: HTML, CSS, JavaScript, ReactJs, Redux, MongoDB, Tailwind CSS, Bootstrap, version control with Git, WordPress. <br /> <br />
						I am passionate about sharing my technical knowledge by facilitating frontend web development classes and writing on my blog. It is always a pleasure connecting with many of the mentees discussing career development, side projects, and content creation.
						Currently, I’m working as a lead front-end developer, UK-Dion group working collaboratively with a cross-functional team to build internal and customer-facing applications for customers across all the compan
						</p>
					</AboutTextWrapper>
				</AboutWrapper>
			</Container>
		</FeatureSection>
	);
};

export default Features;
