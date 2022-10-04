import React from 'react';
import styled from 'styled-components';
import { PackageHeaderBedtime, PackageHeaderPrincess, PackageHeaderPrincess2, PackageHeaderRoyal } from './PackageHeader';
import { PackageTextBedtime, PackageTextPrincess1, PackageTextPrincess2, PackageTextRoyal } from './PackageText';
import bedtime from '../../images/bedtime.jpg';
import princess1 from '../../images/princess1.jpg';
import princess2 from '../../images/princess2.jpg';
import royal from '../../images/royal.jpg';

const PackageItemOuterContainer = styled.div`
display: flex;
flex-direction: column;
padding: 4rem 2rem;
justify-content: center;
align-items: center;
`
const PackageItemInnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 75%;

@media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
}
`

const PackageImage = styled.img`
width: 300px;
height: auto;
margin: 1rem;
border-radius: 10px;
`

export const PackageItemBedtime = () => {
    return (
        <PackageItemOuterContainer style={{backgroundColor: "var(--primary-opaque)"}}>
            <PackageItemInnerContainer>
                <PackageHeaderBedtime />
                <PackageImage src={bedtime} alt="bedtime image"></PackageImage>
            </PackageItemInnerContainer>
            <PackageTextBedtime />
        </PackageItemOuterContainer>
    )
}
export const PackageItemPrincess = () => {
    return (
        <PackageItemOuterContainer>
            <PackageItemInnerContainer>
            <PackageHeaderPrincess />
            <PackageImage src={princess1} alt="Princess and Me"></PackageImage>
            </PackageItemInnerContainer>
            <PackageTextPrincess1 />
        </PackageItemOuterContainer>
    )
}
export const PackageItemPrincess2 = () => {
    return (
        <PackageItemOuterContainer style={{backgroundColor: "var(--primary-opaque)"}}>
            <PackageItemInnerContainer>
            <PackageHeaderPrincess2 />
            <PackageImage src={princess2} alt="Princess for the day"></PackageImage>
            </PackageItemInnerContainer>
            <PackageTextPrincess2 />
        </PackageItemOuterContainer>
    )
}
export const PackageItemRoyal = () => {
    return (
        <PackageItemOuterContainer>
            <PackageItemInnerContainer>
            <PackageHeaderRoyal />
            <PackageImage src={royal} alt="The Royal Treatment"></PackageImage>
            </PackageItemInnerContainer>
            <PackageTextRoyal />
        </PackageItemOuterContainer>
    )
}