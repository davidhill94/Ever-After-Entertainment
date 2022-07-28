import React from 'react';
import logo from '../../images/eaelogo.png';
import Social from '../Social';
import {
    FooterContainer, 
    FooterInnerContainer,
    FooterLogoWrapper, 
    FooterLogo,
    FooterInfoWrapper,
    FooterTextWrapper,
    FooterText,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
      <FooterLogoWrapper to="/">
            <FooterLogo src={logo} alt="Logo"></FooterLogo>
        </FooterLogoWrapper>
        <FooterInfoWrapper>
        <FooterTextWrapper>
        <FooterText>© 2022</FooterText>
        <FooterText>Website built by David Hill</FooterText>
        <FooterText>Photos by Christopher Matheson</FooterText>
        </FooterTextWrapper>
        <FooterTextWrapper>
            <FooterText>LN2, Lincoln, Lincolnshire</FooterText>
            <FooterText>entertainmenteverafter@gmail.com</FooterText>
            <FooterText>07760887806</FooterText>
        </FooterTextWrapper>
        </FooterInfoWrapper>
      </FooterInnerContainer>
      <FooterInnerContainer>
        <Social />
      </FooterInnerContainer>
    </FooterContainer>
  )
}

export default Footer