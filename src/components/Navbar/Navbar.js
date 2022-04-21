import React, { useState, useEffect } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	StickyNav,
	SNavLogo,
	SNavLinks,
} from './NavbarStyles';
import { navbarData } from '../../data/NavbarData';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [sticky, setSticky] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	  });
	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (id) => {
		scrollTo(id);
		setShow(false);
	};

	const handleScroll = () => {
	  if (window.scrollY > 70) {
		setSticky(true);
	  } else if (window.scrollY < 70) {
		setSticky(false);
	  }
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			{
				sticky? <StickyNav>
				<NavbarContainer>
					<SNavLogo to="/">
						<NavIcon src="./images/logo.svg" alt="" />
						Giftea
					</SNavLogo>
					<MobileIcon onClick={() => setShow(!show)}>
						{show ? <FaTimes /> : <CgMenuRight style={{color: 'black'}} />}
					</MobileIcon>
					<NavMenu show={show}>
						{navbarData.map((el, index) => (
							<NavItem key={index}>
								<SNavLinks to="/" onClick={() => closeMobileMenu(el.to)}>
									{el.text}
								</SNavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</StickyNav>:
			<Nav>
			<NavbarContainer>
				<NavLogo to="/">
					<NavIcon src="./images/logo.svg" alt="" />
					Giftea
				</NavLogo>
				<MobileIcon onClick={() => setShow(!show)}>
					{show ? <FaTimes /> : <CgMenuRight />}
				</MobileIcon>
				<NavMenu show={show}>
					{navbarData.map((el, index) => (
						<NavItem key={index}>
							<NavLinks to='' onClick={() => closeMobileMenu(el.to)}>
								{el.text}
							</NavLinks>
						</NavItem>
					))}
					{/* <NavItem>
						<NavLinks to='/articles' >Blog</NavLinks>
					</NavItem> */}
				</NavMenu>
			</NavbarContainer>
		</Nav>
			}
		</IconContext.Provider>
	);
};

export default Navbar;
