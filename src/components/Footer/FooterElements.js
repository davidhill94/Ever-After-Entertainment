import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
min-height: 180px;
background-color: #f3f4f4;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1.5rem 0;
`

export const FooterInnerContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`

export const  FooterLogoWrapper = styled(Link)`
cursor: pointer;
display: block;
align-items: center;
`

export const FooterLogo = styled.img`
height: auto;
width: 300px;

@media screen and (max-width: 768px){
   width: 200px;
}
`

export const FooterInfoWrapper = styled.div`
display: flex;

@media screen and (max-width: 500px){
    flex-direction: column-reverse;
}
`

export const FooterTextWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 1rem;

@media screen and (max-width: 768px){
    text-align: center;
}

@media screen and (max-width: 500px){
    margin: 0.5rem 0;
}
`

export const FooterText = styled.p`
font-size: 1rem;
font-family: 'Shadows Into Light', cursive;
`