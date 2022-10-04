import React from 'react';
import styled from 'styled-components';
import { PackageItemBedtime, PackageItemPrincess, PackageItemPrincess2, PackageItemRoyal } from '../components/Package/PackageItem';
import { PageHeaders } from '../components/PageHeaders';

const PackagesContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 1rem 0 0 0;
background: url(${require(`../images/stars.png`)});
-webkit-background-size: auto 100%;
-moz-background-size: auto 100%;
-o-background-size: auto 100%;
background-size: auto 100%;
background-position: center;
`

const PackagesInfo = styled.p`
font-size: 1rem;
text-align: center;
margin: 0;
font-family: 'Montserrat', sans-serif;
padding: 2rem 5rem;
background-color: var(--primary-opaque);
`

const packages = () => {
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