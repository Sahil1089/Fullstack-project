import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { BiLogoGoogle, BiLogoInstagramAlt, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';

function Footer() {
  return (
    <div className='footer'>
    <span>
      <a href="#">
        <MdEmail/>

        <p>soniskkr1234@gmail.com</p>
      </a>
    </span>
    <span>
      <a href="#">
        <BiLogoInstagramAlt/>

        <p>ecommerce</p>
      </a>
    </span>
    <span>
      <a href="#">
        <BiLogoTwitter/>

        <p>ecommercetwit@</p>
      </a>
    </span>
    <span>
      <a href="#">
        <BiLogoYoutube/>

        <p>ecommerce</p>
      </a>
    </span>
    <span>
      <a href="#">
        <BiLogoGoogle/>

        <p>ecom.com</p>
      </a>
    </span>
    </div>
  )
}

export default Footer