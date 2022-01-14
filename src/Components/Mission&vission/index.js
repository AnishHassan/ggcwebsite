import React from 'react'
import Tilt from 'react-tilt'
import mission from '../../images/Mission.png'
import vision from '../../images/Vision.png'
import {MVisionContainer,MVisionRow,MVisionColumnS,MVisionImg } from './visionggcElements'
export default function Visionggc() {
    return (
        <>
          <MVisionContainer >
            <MVisionRow>
              
              <MVisionColumnS>
                <Tilt >
                  <MVisionImg src={mission} alt="img"/>
                </Tilt> 
              </MVisionColumnS>
              <MVisionColumnS>
                <Tilt >
                  <MVisionImg src={vision} alt="img"/>
                </Tilt> 
              </MVisionColumnS>
                          
            </MVisionRow>
          </MVisionContainer>
        </>
    )
}

