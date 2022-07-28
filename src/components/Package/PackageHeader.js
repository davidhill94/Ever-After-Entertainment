import React from 'react';
import styled from 'styled-components';
import { FaBookOpen, FaRegStar } from 'react-icons/fa';
import { GiCrown, GiWhiteTower } from 'react-icons/gi';

const PackageHeaderContainer = styled.div`
position: relative;
width: 300px;
height: 250px;
`

const PackageHeaderBox = styled.div`
width: 300px;
height: 250px;
background-color: var(--primary);
border-radius: 45px;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Shadows Into Light', cursive;
`
const PackageHeaderTitle = styled.p`
font-size: 2.8rem;
z-index: 2;
text-align: center;
`
const PackageHeaderText = styled.p`
font-size: 1rem;
`

const Line = styled.p`
height: 2px;
width: 2rem;
margin: 1rem 0 0.5rem 0;
background-color: #fff;
`

const PackageHeaderCircle = styled.p`
font-size: 2.5rem;
background-color: var(--primary);
color: #fff;
width: 100px;
height: 100px;
border-radius: 50%;
padding: 1rem;
position: absolute;
top: -15%;
left: 0;
right: 0;
margin-right: auto;
margin-left: auto;
display: flex;
align-items: center;
justify-content: center;
`

export const PackageHeaderBedtime = () => {
  return (
    <PackageHeaderContainer>
        <PackageHeaderBox>
            <PackageHeaderTitle>Bedtime Stories</PackageHeaderTitle>
            <Line></Line>
            <PackageHeaderText>Package</PackageHeaderText>
        </PackageHeaderBox>
        <PackageHeaderCircle><FaBookOpen /></PackageHeaderCircle>
    </PackageHeaderContainer>
  )
}

export const PackageHeaderPrincess = () => {
  return (
    <PackageHeaderContainer>
        <PackageHeaderBox>
            <PackageHeaderTitle>Princess and ME</PackageHeaderTitle>
            <Line></Line>
            <PackageHeaderText>Package</PackageHeaderText>
        </PackageHeaderBox>
        <PackageHeaderCircle><FaRegStar /></PackageHeaderCircle>
    </PackageHeaderContainer>
  )
}

export const PackageHeaderPrincess2 = () => {
  return (
    <PackageHeaderContainer>
        <PackageHeaderBox>
            <PackageHeaderTitle>Princess for the day</PackageHeaderTitle>
            <Line></Line>
            <PackageHeaderText>Package</PackageHeaderText>
        </PackageHeaderBox>
        <PackageHeaderCircle><GiCrown /></PackageHeaderCircle>
    </PackageHeaderContainer>
  )
}
export const PackageHeaderRoyal = () => {
  return (
    <PackageHeaderContainer>
        <PackageHeaderBox>
            <PackageHeaderTitle>The Royal Treatment</PackageHeaderTitle>
            <Line></Line>
            <PackageHeaderText>Package</PackageHeaderText>
        </PackageHeaderBox>
        <PackageHeaderCircle><GiWhiteTower /></PackageHeaderCircle>
    </PackageHeaderContainer>
  )
}