import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaLaptop } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'
import {AiTwotoneShopping} from 'react-icons/ai'
import Tilt from 'react-tilt'

import './Aboutus.css'
function AboutUs() {
    return (

        <div>
            
            <div className="fp">
                                 
                    <h2>Our Customer Suppot</h2>
                </div>

                <div className="support">
                <Tilt>

               
                    <div className="f1">
                        <div className="support-icons">
                            <BiSupport/>
                        </div>
                       
                        Online & Physical support
                    </div>
                    </Tilt>
                    <Tilt>

                   
                    <div className="f2">
                        <div className="support-icons">
                            <AiTwotoneShopping/>
                        </div>
                        <br></br>
                        100% Quality Products
                        
                    </div>
                    
                    </Tilt>
                    <Tilt>
                    <div className="f3">
                        <div className="support-icons">
                            <MdAttachMoney/>
                        </div>
                        
                        100% Money Back guarantee
                    </div>
                    </Tilt>
                   
                    
                </div>

                <br></br>
                <br></br>   
        </div>
        
    )
}

export default AboutUs
