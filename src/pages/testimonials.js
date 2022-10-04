import React from 'react';
import styled from 'styled-components';
import { PageHeaders } from '../components/PageHeaders';
import TestimonialContent from '../components/Testimonials/TestimonialContent';

const TestimonialContainer = styled.div`
width: 100%;
height: auto;
background: url(${require(`../images/stars.png`)});
-webkit-background-size: auto 100%;
-moz-background-size: auto 100%;
-o-background-size: auto 100%;
background-size: auto 100%;
background-position: center;
`

const testimonials = (title) => {
  return (
    <TestimonialContainer>
        <PageHeaders title={"Testimonials"}/>
        <TestimonialContent />
    </TestimonialContainer>
  )
}

export default testimonials