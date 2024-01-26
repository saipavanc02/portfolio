import React from 'react';
import {FaInstagram, FaLinkedin, FaEnvelope} from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  return (
    <div className='icons-container'>
      <FaInstagram className='icons'/>
      <FaLinkedin className='icons'/>
      <FaEnvelope className='icons'/>
    </div>
  )
}

export default Contact
