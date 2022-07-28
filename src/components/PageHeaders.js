import React from 'react';
import styled from 'styled-components';
import video2 from '../videos/video2.mp4';
import christmas from '../videos/christmas.mp4';
import royal from '../videos/royal.mp4';


const PageHeadersContainer = styled.div`
width: 100vw;
height: 100px;
z-index: 20;
position: relative;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1rem;
`

const PageHeaderVideo = styled.video`
height: 100px;
width: 100%;
position:absolute;
bottom:0;
left:0;
object-fit: cover;
font-size: 1.5rem;
`

const PageHeaderSrc = styled.source`
height: auto;
width: 100%;
position:absolute;
bottom:0;
left:0;
`

const PageHeaderText = styled.h2`
color: #fff;
z-index: 2;
`

export const PageHeaders = ({title}) => {
  return (
    <PageHeadersContainer>
        <PageHeaderVideo autoPlay loop muted>
            <PageHeaderSrc src={video2} type='video/mp4'></PageHeaderSrc>
        </PageHeaderVideo>
        <PageHeaderText>{title}</PageHeaderText>
    </PageHeadersContainer>
  )
}

export const PageHeadersChristmas = ({title}) => {
  return (
    <PageHeadersContainer>
        <PageHeaderVideo autoPlay loop muted>
            <PageHeaderSrc src={christmas} type='video/mp4'></PageHeaderSrc>
        </PageHeaderVideo>
        <PageHeaderText>{title}</PageHeaderText>
    </PageHeadersContainer>
  )
}

export const PageHeadersRoyal = ({title}) => {
  return (
    <PageHeadersContainer>
        <PageHeaderVideo autoPlay loop muted>
            <PageHeaderSrc src={royal} type='video/mp4'></PageHeaderSrc>
        </PageHeaderVideo>
        <PageHeaderText>{title}</PageHeaderText>
    </PageHeadersContainer>
  )
}