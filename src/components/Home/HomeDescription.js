import React from 'react';
import styled from 'styled-components';
import stars from '../../images/stars.png';

const HomeDescriptionContainer = styled.div`
position: relative;
`

const HomeDescriptionText = styled.p`
font-size: 1rem;
padding: 2rem;
width: 50%;
transform: translateX(50%);
font-family: 'Shadows Into Light', cursive;
text-align: center;

@media screen and (max-width: 550px) {
  width: 100%;
  transform: none;
}
`

const BackgroundStarsLeft = styled.img`
position: absolute;
top: 0;
left: 0;
width: auto;
height: 100%;
z-index: -1;
opacity: 0.5;

@media screen and (max-width: 550px){
display: none;
}
`
const BackgroundStarsRight = styled.img`
position: absolute;
top: 0;
right: 0;
width: auto;
height: 100%;
z-index: -1;
opacity: 0.5;

@media screen and (max-width: 550px){
  display: none;
}
`

const HomeDescription = () => {
  return (
    <HomeDescriptionContainer>
    <HomeDescriptionText>Ever After provides a variety of princesses, performers and party packages so that your little prince or princess feels like royalty on that special day.</HomeDescriptionText>
    <BackgroundStarsLeft src={stars} alt="stars"></BackgroundStarsLeft>
    <BackgroundStarsRight src={stars} alt="stars"></BackgroundStarsRight>
    </HomeDescriptionContainer>
  )
}

export default HomeDescription