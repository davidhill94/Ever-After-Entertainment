import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/eaelogo.png';
import { 
    Nav, 
    NavbarContainer, 
    NavLogoWrapper,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [thin, setThin] = useState(false);

    useEffect(() => {
        const handleNavbarHeight = () => {
            if(window.innerWidth <= 768) {
                setThin(true)
        } else {
            setThin(false)
        }
        }
        window.addEventListener('resize', handleNavbarHeight)
    }, [thin])

  return (
  <>
    <Nav onLoad={window.innerWidth <= 768 ? () => setThin(true) : () => setThin(false)} thin={thin}>
        <NavbarContainer thin={thin}>
            <NavLogoWrapper to="/" alt="logo">
                <NavLogo src={logo} alt="logo"></NavLogo>
            </NavLogoWrapper>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks 
                    to="about"
                    activeClass='active'
                    >About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="packages"
                    activeClass='active'
                    >Packages</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="princesses" 
                    activeClass='active'
                    >Princesses</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="bookings" 
                    activeClass='active'
                    >Bookings</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="gallery" 
                    activeClass='active'
                    >Gallery</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="testimonials" 
                    activeClass='active'
                    >Testimonials</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="christmas-events" 
                    activeClass='active'
                    >Christmas Events</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="royal-announcements" 
                    activeClass='active'
                    >Royal Announcements</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
  </>
  );
};


export default Navbar;
