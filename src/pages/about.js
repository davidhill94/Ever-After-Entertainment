import React from 'react';
import Director from '../components/About/Director';
import Staff from '../components/About/Staff';
import { PageHeaders } from '../components/PageHeaders';
import styled from 'styled-components';

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
background: url(${require(`../images/stars.png`)});
-webkit-background-size: auto 100%;
-moz-background-size: auto 100%;
-o-background-size: auto 100%;
background-size: auto 100%;
background-position: center;
`

const about = () => {
  return (
    <AboutContainer>
    <PageHeaders title="About Us"/>
    <Director />
    <Staff />
    </AboutContainer>
  )
}

export default about