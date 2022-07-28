import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PackageItemBedtime, PackageItemPrincess, PackageItemPrincess2, PackageItemRoyal } from '../components/Package/PackageItem';
import { PageHeaders } from '../components/PageHeaders';

const animateBackground = keyframes`
0% { background-position: 0 0; }
50% { background-position: 100% 100%; }
100% { background-position: 0 0; }
`

const PackagesContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background: url(${require(`../images/stars.png`)}) repeat-y;
background-size: 100% auto;
`

const PackagesInfo = styled.p`
font-size: 1rem;
text-align: center;
margin: 0 5rem 1rem 5rem;
font-family: 'Montserrat', sans-serif;
box-shadow: -2px 2px 10px 0px var(--primary);
-webkit-box-shadow: -2px 2px 10px 0px var(--primary);
-moz-box-shadow: -2px 2px 10px 0px var(--primary);
padding: 2rem;
background-color: #fff;
`

const packages = (title) => {
    return (
        <PackagesContainer>
            <PageHeaders title={"Packages"}/>
            <PackageItemBedtime />
            <PackageItemPrincess />
            <PackageItemPrincess2 />
            <PackageItemRoyal />
            <PackagesInfo>Parties are also confirmed once the deposit is paid and deposits are expected no later than a month in advance. We ask this is paid via PayPal "gift" option as the deposit is non-refundable. All Clients must read and agree to the Disclaimer before the package can be confirmed.
                <br></br><br></br>
                The remainder of the payment must be paid the day before the event.</PackagesInfo>
        </PackagesContainer>
    )
}

export default packages