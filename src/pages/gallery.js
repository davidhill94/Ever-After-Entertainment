import React from 'react';
import styled from 'styled-components';
import GalleryContent from '../components/Gallery/GalleryContent';
import { PageHeaders } from '../components/PageHeaders';

const GalleryContainer = styled.div`
width: 100%;
height: auto;
background: url(${require(`../images/stars.png`)});
-webkit-background-size: auto 100%;
-moz-background-size: auto 100%;
-o-background-size: auto 100%;
background-size: auto 100%;
background-position: center;
`

const gallery = (title) => {
  return (
    <GalleryContainer>
      <PageHeaders title={"Gallery"} />
        <GalleryContent />
    </GalleryContainer>
  )
}

export default gallery