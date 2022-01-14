import React from 'react'
import styled from 'styled-components'
import {StoresMapContainer,StoresMapHeading,StoresMapFrame } from './StoresMapElements'
import MapSection from '../StoreLoc/MapLHR'
const locationLHR = {
    address: '69 T Block T Gulberg 2, Lahore, Punjab 54660, Pakistan',
    lat: 31.519556262185002,
    lng: 74.3546397981197,
  }

  const locationRWP = {
    address: '17 Basement Al-Shiekh Plaza,Chandni Chowk, Rawalpindi Punjab, 43000',
    lat: 33.56697603526449,
    lng: 73.11667869328302,
  }
 

  const locationKHI = {
    address: 'Mezzanine Floor,7E,9th,Zamzama Commercial Lane, DHA,Karachi, Sindh, 75600 Pakistan',
    lat: 24.830339642173403,
    lng: 67.0704488692513,
  }
function StoreLocations() {
    return (
        <div>
             <>
          <LocationsContainer >
          <StoresMapContainer>
                <StoresMapHeading>Lahore  (42-35778977-78)</StoresMapHeading>
                <MapSection location={locationLHR} zoomLevel={17} />
                <StoresMapHeading>Rawalpindi (51-492707)</StoresMapHeading>
                <MapSection location={locationRWP} zoomLevel={17} />
                <StoresMapHeading>Karachi  (21-35875487)</StoresMapHeading>
                <MapSection location={locationKHI} zoomLevel={17} />
             </StoresMapContainer>
          </LocationsContainer>
        </>
        </div>
    )
}

export default StoreLocations


export const LocationsContainer = styled.div`
min-height : 100vh;
padding : 5rem calc((100vw - 1300px) / 2);
background: rgb(31,1,1);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,108,51,1) 32%, rgba(252,176,69,1) 100%);
padding : 9rem calc((100vw - 1500px) / 2);
margin-top : -100px;
@media  screen and (max-width : 970px){
    min-height : 70vh;
}

`
