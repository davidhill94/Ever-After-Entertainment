import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom'; 

export const SidebarContainter = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #fff;
display: grid;
align-items: center;
justify-content: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
font-family: 'Shadows Into Light', cursive;
`

export const CloseIcon = styled(MdOutlineClose)`
color: var(--primary);

&:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
    color: #000;
}
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
width: 100%;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-row: repeat(6, 60px);
text-align: center;
padding: 0;
margin-top: 3rem;

@media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 40px);
}
@media screen and (max-width: 425px) {
    grid-template-rows: repeat(6, 60px);
}
`

export const SidebarLink = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.2rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: var(--primary);
cursor: pointer;
width: 100%;

&:hover {
    color: #000;
    transtiion: 0.2s ease-in-out;
}
`

export const Socialbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
margin-top: 1rem;
height: auto;
`

export const SocialIcon = styled.a`
color: var(--primary);
margin: 0 12px;
cursor: pointer;
font-size: 1.5rem;

&:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
    color: #000;
}
`

export const SidebarLogoWrapper = styled(NavLink)`
cursor: pointer;
`

export const SidebarLogo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    height: 100px;
    margin-top: 0;
`

export const SocialContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const CopiedText = styled.p`
font-size: 1rem;
color: var(--primary);
z-index: 99;
display: ${(props) => (props.copied ? "auto" : 'none')};
`