import React from 'react'
import Tilt from 'react-tilt'
import mission from '../../images/Mission.png'
import vision from '../../images/Vision.png'
import {MVisionContainer,MVisionRow,MVisionColumnS,MVisionImg } from './visionggcElements'
export default function Visionggc() {
    return (
        <>
          <MVisionContainer id="vision">
            <MVisionRow>
              
              <MVisionColumnS>
               
                  <MVisionImg src={mission} alt="img"/>
             
              </MVisionColumnS>
              <MVisionColumnS>
               
                  <MVisionImg src={vision} alt="img"/>
               
              </MVisionColumnS>
                          
            </MVisionRow>
          </MVisionContainer>
        </>
    )
}

