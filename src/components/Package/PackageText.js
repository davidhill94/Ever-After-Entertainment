import React from 'react';
import styled from 'styled-components';

const PackageTextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 2rem;
width: 50%;
box-shadow: -2px 2px 10px 0px var(--primary);
-webkit-box-shadow: -2px 2px 10px 0px var(--primary);
-moz-box-shadow: -2px 2px 10px 0px var(--primary);
margin: 1rem;

@media screen and (max-width: 1024px){
    width: 80%;
}
@media screen and (max-width: 768px){
    width: 100%;
}
`

const PackageTextSubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const PackageTextLine = styled.p`
font-size: 1rem;
font-family: 'Montserrat', sans-serif;
`

export const PackageTextBedtime = () => {
    return (
        <PackageTextContainer>
            <PackageTextSubContainer>
                <PackageTextLine>
                    - Meet and greet your favourite princess
                    <br></br>
                    - Interactive storytime
                    <br></br>
                    - Live singalong with songs from the story
                    <br></br>
                    - Birthday card and teddy bear for the birthday child
                    <br></br>
                    - Photo opportunities throughout
                    <br></br><br></br>
                    Option to have the princess in pyjama’s.
                </PackageTextLine>
                <PackageTextLine style={{ fontWeight: "800" }}>Bedtime Stories: 30 mins</PackageTextLine>
            </PackageTextSubContainer>
        </PackageTextContainer>
    )
}
export const PackageTextPrincess1 = () => {
    return (
        <PackageTextContainer>
            <PackageTextSubContainer>
                <PackageTextLine>
                    - Meet and greet your favourite princess
                    <br></br>
                    - Interactive storytime
                    <br></br>
                    - Live singalong with songs from the story/stories
                    <br></br>
                    - Birthday card for birthday child
                    <br></br>
                    - Photo opportunities throughout.
                </PackageTextLine>
                <PackageTextLine style={{ fontWeight: "800" }}>Princess and Me: 30 mins</PackageTextLine>
            </PackageTextSubContainer>
        </PackageTextContainer>
    )
}
export const PackageTextPrincess2 = () => {
    return (
        <PackageTextContainer>
            <PackageTextSubContainer>
                <PackageTextLine style={{ fontWeight: "800" }}>Wish ONE:</PackageTextLine>
                <PackageTextLine>
                    - Meet and greet your favourite princess
                    <br></br>
                    - Interactive storytime
                    <br></br>
                    - Live singalong with songs from the story/stories
                    <br></br>
                    - Birthday card  and tiara for birthday child
                    <br></br>
                    - Photo opportunities throughout.
                    <br></br>
                    Plus two Fairy Dust Activities: Arts and Crafts, Princess games, Learn to dance like a princess.
                </PackageTextLine>
                <PackageTextLine style={{ fontWeight: "800" }}>Wish One: One Hour with One Princess</PackageTextLine>
                <br></br>
                <PackageTextLine style={{ fontWeight: "800" }}>Wish TWO:</PackageTextLine>
                <PackageTextLine>
                    - Meet and greet your favourite princess
                    <br></br>
                    - Interactive storytime
                    <br></br>
                    - Live singalong with songs from the story/stories
                    <br></br>
                    - Birthday card and tiara for birthday child
                    <br></br>
                    - Photo opportunities throughout.
                    <br></br>
                    In place of one Fairy Dust Activity there is the option to add one Make a Wish Activity: Hair Braiding, Face Painting, Hair and Makeup, Glitter tattoos.
                </PackageTextLine>
                <PackageTextLine style={{ fontWeight: "800" }}>Wish Two: One Hour with Two Princesses </PackageTextLine>
            </PackageTextSubContainer>
        </PackageTextContainer>
    )
}
export const PackageTextRoyal = () => {
    return (
        <PackageTextContainer>
            <PackageTextSubContainer>
                <PackageTextLine>
                    - Meet and greet your favourite princess
                    <br></br>
                    - Interactive storytime
                    <br></br>
                    - Live singalong with songs from the story/stories
                    <br></br>
                    - Birthday card, tiara and princess goodie bag for birthday child
                    <br></br>
                    - Photo opportunities throughout.
                    <br></br>
                    Choice of three activities from either Make a wish or Fairy Dust.
                </PackageTextLine>
                <PackageTextLine style={{ fontWeight: "800" }}>
                    The Royal Treatment: Two hours with Two Princesses</PackageTextLine>
                <br></br>
                <PackageTextLine style={{ fontWeight: "800" }}>Fairy Dust Activities:</PackageTextLine>
                <PackageTextLine>
                    - Arts and Crafts
                    <br></br>
                    - Princess games
                    <br></br>
                    - Learn to Dance like a princess.
                </PackageTextLine>
                <PackageTextLine style={{ fontWeight: "800" }}>Fairy Make a Wish Activity:</PackageTextLine>
                <PackageTextLine>
                    - Hair Braiding
                    <br></br>
                    - Face Painting
                    <br></br>
                    - Glitter tattoos
                    <br></br>
                    - Hair and Makeup
                </PackageTextLine>
            </PackageTextSubContainer>
        </PackageTextContainer>
    )
}