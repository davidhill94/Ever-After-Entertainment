import React from 'react';
import styled from 'styled-components';
import { PageHeaders } from '../components/PageHeaders';
import PrincessImageGallery from '../components/Princesses/PrincessImageGallery';

const PrincessesContainer = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
background: url(${require(`../images/stars.png`)});
-webkit-background-size: auto 100%;
-moz-background-size: auto 100%;
-o-background-size: auto 100%;
background-size: auto 100%;
background-position: center;
`

const princesses = (title) => {
  return (
    <PrincessesContainer>
      <PageHeaders title={"Princesses"}/>
        <PrincessImageGallery />
    </PrincessesContainer>
  )
}

export default princesses