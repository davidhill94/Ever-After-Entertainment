import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TestimonialData } from './TestimonialData';

const TestimonialItem = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
font-family: 'Shadows Into Light', cursive;
width: 100%;
height: auto;
padding: 2rem 2rem;

@media screen and (max-width: 768px) {
    padding: 1rem 0;
}
`

const TestimonialImage = styled.img`
width: auto;
height: 15rem;
object-fit: cover;

@media screen and (max-width: 768px){
    width: 80%;
}
`

const TestimonialDetails = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin: 0 1rem;
`

const TestimonialInfo = styled.p`
font-size: 2rem;

@media screen and (max-width: 960px){
    font-size: 1.5rem;
}
`
const TestimonialReview = styled.p`
font-size: 1rem;
`

const TestimonialContent = () => {

    const [itemLayout, setItemLayout] = useState(false);

    const handleItemLayout = () => {
        if(window.innerWidth <= 768) {
            setItemLayout(true)
    } else {
        setItemLayout(false)
    }
    }

    useEffect(() => {
        const handleItemLayout = () => {
            if(window.innerWidth <= 768) {
                setItemLayout(true)
        } else {
            setItemLayout(false)
        }
        }
        window.addEventListener('resize', handleItemLayout)
    }, [itemLayout]);

    return (
        TestimonialData.map((item, index) => {
            return (
                <TestimonialItem key={index} onLoad={handleItemLayout} itemLayout={itemLayout} style={{'flexDirection': itemLayout ? "column" : index % 2 === 1 ? 'row-reverse' : 'row', backgroundColor: index % 2 === 0 ? "var(--primary-opaque)" : '#fff'}}>
                    <TestimonialImage src={item.image}></TestimonialImage>
                    <TestimonialDetails>
                        <TestimonialInfo>
                            {item.name}
                            <br></br>
                            {item.date}
                            </TestimonialInfo>
                        <TestimonialReview>{item.review}</TestimonialReview>
                    </TestimonialDetails>
                </TestimonialItem>
            )
        })
    )
}

export default TestimonialContent