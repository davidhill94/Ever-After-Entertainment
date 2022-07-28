import React from 'react';
import styled from 'styled-components';
import ContactDetails from '../components/Bookings/ContactDetails';
import ContactForm from '../components/Bookings/ContactForm';
import { PageHeaders } from '../components/PageHeaders';
import contactImg from '../images/group3.jpg';
import Map from '../components/map';

const BookingsOuterContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%
align-items: center;
justify-content: center;
`

const BookingsContainer = styled.div`
display: flex;
align-items: start;
justify-content: center;
width: 100%;
background: url(${require(`../images/stars.png`)}) repeat-y;
background-size: 100% auto;

@media screen and (max-width: 768px){
  flex-direction: column;
}
`

const BookingsInnerContainer = styled.div`
display: flex;
flex-direction: column;
width: 45%;

@media screen and (max-width: 768px){
  align-items: center;
  justify-content: center;
  width: 100%;
}
`

const ContactImage = styled.img`
width: 100%;
height: 40vh;
object-fit: cover;

@media screen and (max-width: 768px){
  width: 90%;
  height: auto;
  margin-bottom: 2rem;
}
`

const MapContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 2rem 0;
`

const bookings = (title) => {
  return (
    <BookingsOuterContainer>
      <PageHeaders title={"Bookings"} />
       <BookingsContainer>
      <ContactForm />
      <BookingsInnerContainer>
        <ContactDetails />
        <ContactImage src={contactImg} alt="The Princesses lined up"></ContactImage>
      </BookingsInnerContainer>
    </BookingsContainer>
    <MapContainer>
    <Map />
    </MapContainer>
    </BookingsOuterContainer>
  )
}

export default bookings