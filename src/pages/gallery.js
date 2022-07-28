import React from 'react';
import styled from 'styled-components';
import GalleryContent from '../components/Gallery/GalleryContent';
import { PageHeaders } from '../components/PageHeaders';

const GalleryContainer = styled.div`
width: 100%;
height: auto;
background: url(${require(`../images/stars.png`)}) repeat-y;
background-size: 100% auto;
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