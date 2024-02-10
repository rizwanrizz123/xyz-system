import React from 'react'
import logo from "../assets/real-estate-house.png"
import './Header.css'

function Header() {
  return (
    <div className='content-wrapper grey-bg'>
        <div className='header-wrap'>
            <div className='header-inner-wrap'>
            <img className='header-icon'  src={logo} alt="logo1"/>
        <h6 className='header-name'>XYZ SYSTEMS LLP.</h6>
            </div>
        
        </div>
      {/* <div className='container-fluid d-flex justify-content-center align-items-center'>
        <img  src={logo} alt="logo1" width={'110px'} height={'110px'}/>
        <h6>XYZ SYSTEMS LLP.</h6>
      </div> */}
    </div>
  )
}

export default Header