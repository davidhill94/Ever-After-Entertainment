import React from 'react';
import styled from 'styled-components';


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

const PageHeaderText = styled.h2`
color: var(--primary);
z-index: 2;
font-family: 'Shadows Into Light', cursive;
white-space: nowrap;
`

const PageLine = styled.p`
width: 40%;
height: 0.2rem;
background-color: var(--primary);
margin: 0 1.5rem;
border-radius: 50%;
`

export const PageHeaders = ({title}) => {
  return (
    <PageHeadersContainer>
      <PageLine></PageLine>
        <PageHeaderText>{title}</PageHeaderText>
        <PageLine></PageLine>
    </PageHeadersContainer>
  )
}