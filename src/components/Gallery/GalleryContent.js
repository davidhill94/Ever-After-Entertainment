import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styled from 'styled-components';
import { GalleryData } from './GalleryData';

const GalleryContentContainer = styled.div`
width: 100%;
height: auto;
padding: 2rem 0;
`

const GalleryWrapper = styled.div`
-webkit-column-count: 4;
-moz-column-count: 4;
column-count: 4;
-webkit-column-width: 25%;
-moz-column-width: 25%;
column-width: 25%;
padding: 0 1rem;

@media screen and (max-width: 768px){
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2; 
}
@media screen and (max-width: 450px){
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1; 
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
}
`

const GalleryItem = styled.div`
transition: all 350ms ease;
-webkit-transtion: all 350ms ease;
cursor: pointer;
margin-bottom: 1rem;

&:hover {
    opacity: 0.8;
}
`

const GalleryImage = styled.img`
width: 100%;
`

const ModalWrapper = styled.div`
display: ${(props) => (props.modal ? "flex" : "none")};
width: 100%;
height: 100vh;
position: fixed;
top: 0;
left: 0;
justify-content: center;
align-items: center;
overflow: hidden;
z-index: 999;
background-color: #000;
opacity: ${(props) => (props.modal) ? "1" : "0"};
transition: opacity 5.4s ease
`

const ModalImage = styled.img`
width: auto;
max-width: 100%;
height: auto;
max-height: 100%;
padding: 2rem;

@media screen and (max-width: 960px){
    max-width: 90%;
    max-height: 90%;
}
@media screen  and (max-width: 650px){
    max-width: 100%;
    max-height: 100%;
}
`

const CloseIcon = styled.p`
font-size: 2rem;
color: #fff;
position: fixed;
top: 5%;
right: 5%;
z-index: 999;
cursor: pointer;

&:hover {
    transform: scale(1.1);
}
`

const GalleryContent = () => {

    const [modal, setModal] = useState(false);
    const [tempImg, setTempImg] = useState("");

    const getImage = (image) => {
        setModal(true);
        setTempImg(image);
    }
  return (
    <GalleryContentContainer>
        <ModalWrapper id="modal-wrapper" modal={modal}>
            <ModalImage src={tempImg}></ModalImage>
            <CloseIcon onClick={() => setModal(false)}><MdOutlineClose /></CloseIcon>
        </ModalWrapper>
        <GalleryWrapper>
        {GalleryData.map((item, index) => {
            if (index === 0) {
                return null
            }
            return (
                <GalleryItem key={index} onClick={() => getImage(item.image)}>
                    <GalleryImage src={item.image} alt={item.alt}></GalleryImage>
                </GalleryItem>
            )
        })}
        </GalleryWrapper>
    </GalleryContentContainer>
  )
}

export default GalleryContent