import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import {
	HeroSection,
	Heading,
	HeroText,
	ButtonContainer,
	HeroButton,
	HeroImage,
	HeroContent,
	ButtonWrapper,
} from './HeroStyles';
import { useInView } from 'react-intersection-observer';
import Modal from '../Modal/Modal';

const Hero = () => {
	const [showModal, setShowModal] = useState(false);
	const [isVisible, setIsVisible] = useState(true);

	const toggleModal = () => {
		if (!showModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		setShowModal(!showModal);
	};

	const { ref, inView } = useInView({
		rootMargin: '-100px',
	});

	const listenToScroll = () => {
		let heightToHideFrom = document.body.scrollHeight - 1000;
		console.log(heightToHideFrom)
		const winScroll = document.body.scrollTop || 
			document.documentElement.scrollTop;

		if (winScroll > heightToHideFrom) { 
		   isVisible &&      // to limit setting state only the first time         
			 setIsVisible(false);
		} else {
			 setIsVisible(true);
		}  
	  };

	

	useEffect(() => {   
		window.addEventListener("scroll", listenToScroll);
		return () => 
		   window.removeEventListener("scroll", listenToScroll); 
	  }, [])


	return (
		<>
			<HeroSection id="hero">
				<HeroImage className="pattern" src="./images/hero-pattern-bg-lg.png" />
				<HeroImage className="guy" src="./images/hero-guy-1.png" />
				<HeroContent>
					<Heading>I am Uhiene Gift</Heading>
					<HeroText>
						I am a web developer and technical writer who appreciates efficient and beautiful code
					</HeroText>
					<ButtonContainer ref={ref}>
					<ButtonWrapper>						
						<HeroButton onClick={toggleModal} className={`${inView ? ' ': 'corner'} ${isVisible ? '': 'animate__animated animate__fadeOutDownBig'}`}>
							{inView ? (
								<> Contact Me</>
							) : (
								<FiMail color="white" size="2.3rem" />
							)}
						</HeroButton>
					</ButtonWrapper>
				</ButtonContainer>

				</HeroContent>
			</HeroSection>
			<Modal showModal={showModal} toggleModal={toggleModal} />
		</>
	);
};

export default Hero;