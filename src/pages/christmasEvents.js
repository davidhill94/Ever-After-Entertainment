import React from 'react';
import styled from 'styled-components';
import { PageHeadersChristmas } from '../components/PageHeaders';

const ChristmasEventsContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%
align-items: center;
justify-content: center;
`

const christmasEvents = (title) => {
  return (
    <ChristmasEventsContainer>
        <PageHeadersChristmas title={"Christmas Events"} />
    </ChristmasEventsContainer>
  )
}

export default christmasEvents