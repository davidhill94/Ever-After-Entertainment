import React from 'react';
import styled from 'styled-components';
import EK from '../../images/EmelyKeane.jpg';
import EW from '../../images/EmmaWighton.jpg';
import HB from '../../images/HayleyBanfield.jpg';
import LC from '../../images/LauraCornet.jpg';
import MC from '../../images/MeganClutterbuck.jpg';

const StaffContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
width: 80%;
padding: 1rem;
transform: translateX(10%);
font-family: 'Montserrat', sans-serif;
`

const StaffTitle = styled.h2`
font-size: 1.5rem;
margin: 0.5rem;
`

const Line = styled.p`
width: 400px;
height: 2px;
background-color: var(--primary);

@media screen and (max-width: 500px){
    width: 260px;
}
`

const StaffRow = styled.div`
display: flex;
margin: 1rem 0.5rem;
width: 100%;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`

const StaffItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 2rem;
`

const StaffImage = styled.img`
height: 250px;
width: auto;
`

const StaffName = styled.h3`
font-size: 1.2rem;
color: var(--primary);
margin-top: 0.5rem;

@media screen and (max-width: 768px){
    font-size: 1rem;
}
`

const Staff = () => {
  return (
    <StaffContainer>
        <StaffTitle>Staff</StaffTitle>
        <Line></Line>
        <StaffRow>
            <StaffItem>
                <StaffImage src={EK} alt="Emely Keane, Staff"></StaffImage>
                <StaffName>Emely Keane</StaffName>
            </StaffItem>
            <StaffItem>
                <StaffImage src={LC} alt="Laura Cornet, Staff"></StaffImage>
                <StaffName>Laura Cornet</StaffName>
            </StaffItem>
            <StaffItem>
                <StaffImage src={HB} alt="Hayley Banfield, Staff"></StaffImage>
                <StaffName>Hayley Banfield</StaffName>
            </StaffItem>
        </StaffRow>
        <StaffRow>
            <StaffItem>
                <StaffImage src={MC} alt="Megan Clutterbuck, Staff"></StaffImage>
                <StaffName>Megan Clutterbuck</StaffName>
            </StaffItem>
            <StaffItem>
                <StaffImage src={EW} alt="Emma Wighton, Staff"></StaffImage>
                <StaffName>Emma Wighton</StaffName>
            </StaffItem>
        </StaffRow>
    </StaffContainer>
  )
}

export default Staff