import React from 'react';
import styled from 'styled-components';
import DirectorImg from '../../images/VickyTurzanski.jpg';

const DirectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
width: 100%;
padding: 1rem 3rem;
font-family: 'Montserrat', sans-serif;

@media screen and (max-width: 768px){
    align-items: center;
}

@media screen and (max-width: 425px) {
    padding: 0;
}
`

const DirectorTitle = styled.h2`
font-size: 1.5rem;
margin: 0.5rem;

@media screen and (max-width: 768px){
    font-size: 1.2rem;
}
`

const DirectorName = styled.h3`
font-size: 1.2rem;
margin: 1rem 0.5rem;

@media screen and (max-width: 768px){
    font-size: 1rem;
}
`

const ImageInfoWrapper = styled.div`
display: flex;
align-items: center;
background-color: rgba(7, 162, 190, 0.2);

@media screen and (max-width: 768px){
    flex-direction: column;
    background-color: transparent;
}
`

const DirectorImage = styled.img`
height: 300px;
width: auto;
margin-right: 2rem;

@media screen and (max-width: 768px){
    margin-right: 0;
}
`

const DirectorInfo = styled.p`
font-size: 1rem;
margin: 1rem;

@media screen and (max-width: 768px){
    background-color: rgba(7, 162, 190, 0.2);
    padding: 2rem;
}

@media screen and (max-width: 425px) {
    margin: 1rem 0;
}
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

const Director = () => {
    return (
        <DirectorContainer>
            <DirectorTitle>Managing Director</DirectorTitle>
            <Line></Line>
            <DirectorName>Vicky Turzanski-Hill</DirectorName>
            <ImageInfoWrapper>
                <DirectorImage src={DirectorImg} alt="Vicky Turzanski, Managing Director"></DirectorImage>
                <DirectorInfo>Victoria began her career working with Theatre for Children whilst studying Drama at University. She then started working as a children's entertainer for the Little Princess Club. In January 2016, after the closure of TLPC Victoria opened Ever After Entertainment.
                    <br></br><br></br>
                    Ever After Entertainment provides a variety of princesses, performers and party packages for all occasions. Our performers undergo intensive auditions and training to ensure we provide a professional and quality service at all times. It is our aim to ensure every little prince and princess recieves royal treatment on that special day and to create magical memories that will last a life time.  </DirectorInfo>
            </ImageInfoWrapper>
        </DirectorContainer>
    )
}

export default Director