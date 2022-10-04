import React from 'react';
import styled from 'styled-components';

const HomeDescriptionContainer = styled.div`
position: relative;
padding: 2rem;
`

const HomeDescriptionText = styled.p`
font-size: 1.5rem;
padding: 2rem 7.5rem;
width: 100%;
font-family: 'Shadows Into Light', cursive;
text-align: center;
margin: 0;

@media screen and (max-width: 550px) {
  width: 100%;
  transform: none;
}
`

const BackgroundStars= styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
opacity: 0.3;
background: url(${require(`../../images/stars.png`)});
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-position: center;
`

const HomeDescription = () => {
  return (
    <HomeDescriptionContainer>
      <BackgroundStars></BackgroundStars>
    <HomeDescriptionText>Ever After provides a variety of princesses, performers and party packages so that your little prince or princess feels like royalty on that special day.</HomeDescriptionText>
    </HomeDescriptionContainer>
  )
}

export default HomeDescription