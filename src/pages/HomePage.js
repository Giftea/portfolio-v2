import React from 'react';
import Content from '../components/Content/Content';
import Clients from '../components/Clients/Clients';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from '../globalStyles';
import Articles from '../components/Articles/Articles';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Features />
			{
				window.innerWidth > 1000 && <Clients />
			}			
			<Heading id="projects">Projects</Heading>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Content {...heroFour} />
			<Articles/>
		</>
	);
};

export default HomePage;
