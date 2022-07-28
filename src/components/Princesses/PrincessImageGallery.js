import React, { useState } from 'react';
import styled, { keyframes }  from 'styled-components';
import { PrincessImageData } from './PrincessImageData';

const delayText = keyframes`
0% { opacity: 0; }
50% { opacity: 0; }
100% { opacity: 1; }
`

const PrincessImageGalleryContainer = styled.div`
display: flex;
width: 100%;
height: auto;
align-items: center;
justify-content: center;
overflow: hidden;

@media screen and (max-width: 700px){
    flex-direction: column;
}
`

const PrincessItem = styled.div`
position: relative;
cursor: pointer;

@media screen and (max-width: 700px){
    margin-bottom: 1rem;
    box-shadow: -2px 2px 10px 0px var(--primary);
-webkit-box-shadow: -2px 2px 10px 0px var(--primary);
-moz-box-shadow: -2px 2px 10px 0px var(--primary);
}
`

const PrincessImage = styled.img`
height: 450px;
width: ${(props) => (props.open ? "25vw" : "calc(100vw / 8)")};
object-fit: cover;
transition: width 1.5s ease, opacity 0.4s ease;

&:hover {
    opacity: 0.8;
}

@media screen and (max-width: 700px){
   height: 400px;
   width: 300px;
}
@media screen and (max-width: 500px){
   height: 300px;
   width: 200px;
}
`

const PrincessName = styled.p`
font-size: 1rem;
font-family: 'Shadows Into Light', cursive;
position: absolute;
width: 100%;
background-color: var(--primary);
color: #fff;
text-align: center;
bottom: 5%;
left: 0;
padding: 1rem;
animation-name: ${delayText};
    animation-duration: 2s;
    animation-fill-mode: forwards;

@media screen and (max-width: 700px){
    animation-name: none;
    animation-duration: none;
    animation-fill-mode: forwards: none;
}
`

const PrincessImageGallery = () => {
    const [open, setOpen] = useState(false);

    const toggle = index => {
        //If Open is already active, then close it
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index);
    }

    return (
        <PrincessImageGalleryContainer>
            {PrincessImageData.map((item, index) => {
                if (index === 0) {
                    return null
                }
                return (
                    open === index ?
                        <PrincessItem>
                            <PrincessImage open={open} key={index} onClick={() => toggle(index)} src={item.image} alt={item.alt}></PrincessImage>
                            <PrincessName>{item.alt}</PrincessName>
                        </PrincessItem>
                        :
                        <PrincessItem>
                        <PrincessImage key={index} onClick={() => toggle(index)} src={item.image} alt={item.alt}></PrincessImage>
                        {window.innerWidth <= 700 ?
                        <PrincessName>{item.alt}</PrincessName>
                        :
                        null
                        }
                        </PrincessItem>
                )
            })}
        </PrincessImageGalleryContainer>
    )
}

export default PrincessImageGallery