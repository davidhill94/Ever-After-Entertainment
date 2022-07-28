import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const SocialContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Socialbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
margin-top: 1rem;
height: auto;
`

export const SocialIcon = styled.a`
color: var(--primary);
margin: 0 12px;
cursor: pointer;
font-size: 1.5rem;

&:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
    color: #000;
}
`

export const CopiedText = styled.p`
font-size: 1rem;
color: var(--primary);
z-index: 99;
display: ${(props) => (props.copied ? "auto" : 'none')};
`

const Social = () => {

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const copiedTimer = setTimeout(() => {
            setCopied(false)
        }, 4000);
        return () => clearTimeout(copiedTimer);
    })

    return (
        <SocialContainer>
            {copied
                ?
                <Socialbar>
                    <CopiedText copied={copied}>Copied!</CopiedText>
                </Socialbar>
                :
                <Socialbar>
                    <SocialIcon href='https://www.facebook.com/entertainmenteverafter' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIcon>
                    <SocialIcon href='https://www.instagram.com/everafterentertainment.x/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIcon>
                    <SocialIcon onClick={() => { navigator.clipboard.writeText('entertainmenteverafter@gmail.com'); setCopied(!copied); }}><MdEmail /></SocialIcon>
                    <SocialIcon onClick={() => { navigator.clipboard.writeText('07760887806'); setCopied(!copied); }}><FaPhone /></SocialIcon>
                </Socialbar>
            }
        </SocialContainer>
    )
}

export default Social