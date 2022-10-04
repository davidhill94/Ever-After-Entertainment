import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 

export const Nav = styled.nav`
background-color: #fff;
height: ${({ thin }) => (thin ? '80px' : '180px')};
display: flex;
justify-content: center;
align-items: center;
position: static;
font-size: 16px;
top: 0;
z-index: 10;
font-family: 'Shadows Into Light', cursive;
transition: 0.8s all ease;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: ${({ thin }) => (thin ? '80px' : '180px')};
z-index: 100;
width: 100%;
padding: 0 24px;
max-width: 1100px;

@media screen and (max-width: 768px){
    align-items: start;
 }
`

export const  NavLogoWrapper = styled(NavLink)`
cursor: pointer;
display: block;
align-items: center;
`

export const NavLogo = styled.img`
height: auto;
width: 300px;

@media screen and (max-width: 768px){
   width: 200px;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--primary);
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
list-style: none;
text-align: center;
margin: 0rem 1rem 1.5rem 1rem;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: auto;
font-size: 1.2rem;
`

export const NavLinks = styled(NavLink)`
color: #000;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
padding: 0.1rem;
height: 100%;
cursor: pointer;
margin: 0.4rem 0.8rem 0 0.8rem;

&:hover {
    color: var(--primary);
}

&.active {
    border-bottom: 3px solid var(--primary);
    color: var(--primary);
}
`