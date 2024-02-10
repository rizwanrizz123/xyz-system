import React from 'react'
import Header from '../components/Header'
import image from '../assets/celeb.png'
import './Login.css'

function Login() {
  return (
    <div>
        <Header/>
        <div className='content-wrapper'>
        <div className='form-wrapper'>
        <div className='form-section'>
            <h1 className='form-header'>Unlock Exclusive Benefits </h1>
            <form>
                <div className='form-inner-sec'>
                <label for="fname">Phone number</label><br />
                <div className='d-flex form-selection'>
                <select class="form-select" id="country" name="country">
                <option>+91 India</option>
                <option value="AF">+9871 UAE</option>
                <option value="AX">+98 </option>
                </select>
                <input type="text" id="fname" name="fname" />
                </div>
                </div>
                <div className='form-inner-sec'>
                <label for="fname">Name</label><br />
                <input type="text" id="fname" name="fname" />
                </div>
                <div className='form-inner-sec'>
                <label for="fname">Email Optional</label><br />
                <input type="email" id="fname" name="fname" />
                </div>
                <button className='continue-button'>Continue</button>
            
            </form>
        </div>
        <div className='form-image'>
        <img className='login-img'  src={image} alt=""/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Login