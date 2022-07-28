import React from 'react';
import styled from 'styled-components';
import { PageHeadersRoyal } from '../components/PageHeaders';

const RoyalAnnouncementsContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%
align-items: center;
justify-content: center;
`

const royalAnnouncements = (title) => {
  return (
    <RoyalAnnouncementsContainer>
        <PageHeadersRoyal title={"Royal Announcements"} /> 
    </RoyalAnnouncementsContainer>
  )
}

export default royalAnnouncements