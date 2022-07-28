import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { GiFairyWand } from 'react-icons/gi';

const ContactFormContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 2rem 2rem;
width: 45%;

@media screen and (max-width: 768px){
    width: 100%;
    padding: 2rem 2rem 0 2rem;
}
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
`

const FormItem = styled.div`
margin: 0.5rem;
`

const FormInput = styled.input`
padding: 0.5rem;
width: 100%;
border-radius: 6px;
border: none;
box-shadow: -2px 2px 10px 0px var(--primary);
-webkit-box-shadow: -2px 2px 10px 0px var(--primary);
-moz-box-shadow: -2px 2px 10px 0px var(--primary);
`

const FormMessage = styled.textarea`
font-family: 'Montserrat', sans-serif;
padding: 0.5rem;
width: 100%;
height: 150px;
border-radius: 4px;
border: none;
box-shadow: -2px 2px 10px 0px var(--primary);
-webkit-box-shadow: -2px 2px 10px 0px var(--primary);
-moz-box-shadow: -2px 2px 10px 0px var(--primary);
`

const FormSubmitWrapper = styled.div`
display: flex;
align-items: center;
`

const FormSubmit = styled.input`
padding: 0.5rem;
cursor: pointer;
border-radius: 4px;
background-color: var(--primary);
color: #fff;
border: 2px solid var(--primary);

&:hover {
background-color: #fff;
color: var(--primary);
}
`

const FormSent = styled.p`
opacity: ${(props) => (props.sent ? "1" : "0")};
font-size: 1rem;
color: var(--primary);
font-family: 'Montserrat', sans-serif;
`

const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_ymjflz8', 'template_gz5ioco', e.target, "user_sWUq5Ae8VbeTY2NDEEjKd")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

const ContactForm = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = e => {
        sendEmail(e)
        setSent(true)
    }

    useEffect(() => {
        const sentMessage = setTimeout(() => {
            setSent(false)
        }, 6000);
        return () => clearTimeout(sentMessage);
    })
  return (
    <ContactFormContainer>
        <Form onSubmit={handleSubmit}>
            <FormItem>
                <FormInput type="text" placeholder="Name" name="name"></FormInput>
            </FormItem>
            <FormItem>
                <FormInput type="email" placeholder="Email" name="email"></FormInput>
            </FormItem>
            <FormItem>
                <FormInput type="text" placeholder="Preferred Date" name="date"></FormInput>
            </FormItem>
            <FormItem>
                <FormInput type="text" placeholder="Location" name="location"></FormInput>
            </FormItem>
            <FormItem>
                <FormInput type="text" placeholder="Package / Character" name="package"></FormInput>
            </FormItem>
            <FormItem>
                <FormMessage cols="10" placeholder="Your Message" name="message"></FormMessage>
            </FormItem>
            <FormSubmitWrapper>
            <FormItem>
                <FormSubmit type="submit" value="Make a Wish"></FormSubmit>
            </FormItem>
            <FormItem>
                <FormSent sent={sent}><GiFairyWand /> Your wish has been sent <GiFairyWand /></FormSent>
            </FormItem>
            </FormSubmitWrapper>
        </Form>
    </ContactFormContainer>
  )
}

export default ContactForm