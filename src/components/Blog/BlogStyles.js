import styled from 'styled-components';
import { Section } from '../../globalStyles';
import { motion } from 'framer-motion';

export const HeroSection = styled(Section)`
background-color: #4c4177;
background-image: linear-gradient(315deg, #4c4177 20%, #2a5470 74%);
	background-size: cover;
	background-attachment: fixed;
	z-index: 11;
	align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
	display: flex;
`;

export const Heading = styled.h1`
	margin: 1.5rem 0;
	font-size: 35px;
    font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
	text-align: center;
	color: white;
	@media screen and (max-width: 768px) {
		font-size: 1.5rem;

	}
`;

export const HeroText = styled.div`
	text-align: center;
	font-size: 16px;
`;