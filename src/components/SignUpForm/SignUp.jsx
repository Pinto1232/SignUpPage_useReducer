import React from 'react'
import './SignUp.css'

const SignUp = () => {

    const addRegisterHandler = (event) =>{
        event.preventDefault()
    }
  return (
      <div className="registerForm">
          <div className="RegisterContainerHeadLine">Register</div>
          <form  className="RegisterForm">
              <input
                  type="text"
                  className="TextInput"
                  name="name"
                  placeholder="Name"
                 autoComplete="new-password" 
              />

              <input
                  type="password"
                  className="TextInput"
                  name="password"
                  placeholder="Password"
                  autoComplete="new-password"
              />

              <input
                  type="password"
                  className="TextInput"
                  name="passwordRepeat"
                  placeholder="Password repeat"
                 autoComplete="new-password"
              />
              <label className="TouchCheckboxlabel">
                  <input
                      type="checkbox"
                      className="TouchCheckbox"
                      name="termsAccepts"
                  />
                       Accept Terms of Use!
              </label>
              <button  onClick={addRegisterHandler}>
                  Register
              </button>
          </form>
    </div>
  )
}

export default SignUp