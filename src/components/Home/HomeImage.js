import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../images/eaehome.jpg';

const BackgroundImageHome = styled.img`
width: 99.9%;
height: auto;
`

const HomeImage = () => {
  return (
    <BackgroundImageHome src={backgroundImg} alt="Castle Image"></BackgroundImageHome>
  )
}

export default HomeImage
