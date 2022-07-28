import React from 'react';
import styled from 'styled-components';

const ContactDetailsContainer = styled.div`
display: flex;
flex-direction: column;
font-family: 'Montserrat', sans-serif;
padding: 2rem 0 0.5rem 0;

@media screen and (max-width: 768px){
    padding 0.5rem 0 1rem 0;
    align-items: center;
    justify-content: center;
}
`

const ContactText = styled.p`
font-size: 1rem;
color: var(--primary);

@media screen and (max-width: 768px){
    text-align: center;
}
`

const Line = styled.p`
height: 2px;
width: 50px;
background-color: var(--primary);
margin: 0.5rem 0;
`

const ContactDetails = () => {
    return (
        <ContactDetailsContainer>
            <ContactText>Tel: 07760887806 </ContactText>
            <ContactText>entertainmenteverafter@gmail.com</ContactText>
            <Line></Line>
            <ContactText>
                LN1 Lincoln,
                <br></br>
                Lincolnshire
                <br></br>
                LS16 Leeds,
                <br></br>
                West Yorkshire
            </ContactText>
        </ContactDetailsContainer>
    )
}

export default ContactDetails