import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
      <div className="registerForm">
          <div className="RegisterContainerHeadLine">Register</div>
          <form className="RegisterForm">
              <input
                  type="text"
                  className="TextInput"
                  name="name"
                  placeholder="Name"
              />

                <input
                  type="email"
                  className="TextInput"
                  name="email"
                  placeholder="Email"
              />

                <input
                  type="password"
                  className="TextInput"
                  name="password"
                  placeholder="Password"
              />
          </form>
    </div>
  )
}

export default SignUp