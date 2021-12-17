import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import './footer.css'
import {
	FooterContainer,
	FooterMain,
	FooterSubscription,
	FooterSubHeading,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,

} from './FooterStyles';

const Footer = () => {
	return (
		<>
		<FooterContainer>
			<div className='wave wave1'> </div>
			<div className='wave wave2'> </div>
			<div className='wave wave3'> </div>
			<div className='wave wave4'> </div>
			{/* <Wave5 /> */}
			{/* <FooterSubscription>
				<SocialLogo to="/">
					<SocialIcon src="./images/logo.svg" />
					esignify
				</SocialLogo>
				<FooterSubHeading>Interested working with us?</FooterSubHeading>
			</FooterSubscription>

			<SocialMedia>
				<SocialMediaWrap>
					<WebsiteRights>© Copyright 2021, Designify. All Rights Reserved</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink href="/" target="blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/" target="blank" aria-label="Youtube">
							<FaYoutube />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia> */}

		</FooterContainer>
		<FooterMain>

		</FooterMain>
		</>
	);
};

export default Footer;
