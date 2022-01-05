import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import {FaBusinessTime } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
function Contacttemp() {
    return (
        <div className="row">
        <div className="col-md-3 fs-2" ><FaPhoneAlt /><br /> PHONE <br /><span className='fs-6'>+01-3-8888-6868</span></div>
        <div className="col-md-3 fs-2" ><FaLocationArrow /><br /> ADDRESS <br /><span className='fs-6'>60-49 Road 11378 New York</span></div>
        <div className="col-md-3 fs-2" ><FaBusinessTime /><br /> OPEN TIME <br /><span  className='fs-6'>10:00 am to 23:00 pm</span></div>
        <div className="col-md-3 fs-2" ><FaMailBulk /><br /> EMAIL <br /><span className='fs-6'>hello@ogani.com</span></div>
    </div>
    )
}

export default Contacttemp
