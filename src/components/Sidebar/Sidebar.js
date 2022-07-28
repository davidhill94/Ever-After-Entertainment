import React from 'react';
import {
    SidebarContainter,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLogo,
    SidebarLogoWrapper
} from './SidebarElements';
import logo from '../../images/eaelogo.png';
import Social from '../Social';

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainter isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to="about"
                        onClick={toggle}>About</SidebarLink>
                    <SidebarLink
                        to="packages"
                        onClick={toggle}>Packages</SidebarLink>
                    <SidebarLink
                        to="princesses"
                        onClick={toggle}>Princesses</SidebarLink>
                    <SidebarLink
                        to="bookings"
                        onClick={toggle}>Bookings</SidebarLink>
                    <SidebarLink
                        to="gallery"
                        onClick={toggle}>Gallery</SidebarLink>
                    <SidebarLink
                        to="testimonials"
                        onClick={toggle}>Testimonials</SidebarLink>
                        <SidebarLink
                        to="christmas-events"
                        onClick={toggle}>Christmas Events</SidebarLink>
                        <SidebarLink
                        to="royal-announcements"
                        onClick={toggle}>Royal Announcements</SidebarLink>
                        <Social />
                    <SidebarLogoWrapper to="/" onClick={toggle}>
                        <SidebarLogo src={logo} alt="logo"></SidebarLogo>
                    </SidebarLogoWrapper>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainter>
    )
};

export default Sidebar;
