import React from 'react'
import "../CSS/LoginSignup.css"

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' name="" id="" />
          <input type="email" placeholder='Your email' name="" id="" />
          <input type="password" placeholder='Password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an accout? 
          <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=" " />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup