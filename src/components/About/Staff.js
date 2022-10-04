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
width: 100%;
padding: 1rem 3rem;
font-family: 'Montserrat', sans-serif;
position: relative;

@media screen and (max-width: 768px){
    align-items: center;
}
`

const StaffBackground = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
opacity: 0.3;
`

const StaffTitle = styled.h2`
font-size: 1.5rem;
margin: 0.5rem;
`

const Line = styled.p`
width: 30%;
height: 2px;
background-color: var(--primary);

@media screen and (max-width: 768px){
    width: 50%;
}
@media screen and (max-width: 450px){
    width: 80%;
}
`

const StaffWrapper = styled.div`
display: flex;
margin: 1rem 0.5rem;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;

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

@media screen and (max-width: 425px) {
    height: 150px;
}
`

const StaffName = styled.h3`
font-size: 1.2rem;
margin-top: 0.5rem;

@media screen and (max-width: 768px){
    font-size: 1rem;
}
`

const Staff = () => {
  return (
    <StaffContainer>
        <StaffBackground />
        <StaffTitle>Staff</StaffTitle>
        <Line></Line>
        <StaffWrapper>
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
            <StaffItem>
                <StaffImage src={MC} alt="Megan Clutterbuck, Staff"></StaffImage>
                <StaffName>Megan Clutterbuck</StaffName>
            </StaffItem>
            <StaffItem>
                <StaffImage src={EW} alt="Emma Wighton, Staff"></StaffImage>
                <StaffName>Emma Wighton</StaffName>
            </StaffItem>
        </StaffWrapper>
    </StaffContainer>
  )
}

export default Staff