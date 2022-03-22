import React, {useReducer} from 'react'
import './SignUp.css'

/*  Initial State*/
const initialState = {
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    termsAccepts: false
}

const reducer = (state, action) =>{
    /* Log the action the console */
     /* console.log(action); */ 
     
    /* Checking if the input = name exist and return an action value */
    /* if (action.input === 'name'){
        return { ...state, name: action.value };
    }
    return { ...state }; */
    return {...state, [action.input] : action.value };
}

 /* Validate the State */
const validateState = (state) => {
    return state.password === state.passwordRepeat
        && state.termsAccepts && state.password.length > 3
}

const SignUp = () =>{
    //Call the initialState and reducer function 
    const [state, dispatch] = useReducer(reducer, initialState)

     /* console.log(state);  */


    const onChange = (e) =>
    {
        /* Destructuring the values */
        const { name, value, checked } = e.target
        
        /* Logic that will update the state */
        const action = {
            /*  input: 'name', */

            /* Getting the value of all the fields */
            /* input: e.target.name, */

            input: name,
            /* Checking the checkbox */
            value: value === 'termsAccepts' ? checked : value,
        }
        /* Dispatch the action */
        dispatch(action)
    }

    const addRegisterHandler = (event, e) =>{
        event.preventDefault()
        alert(`Hey ${state.name} you have successful register `)
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
                  onChange={onChange}
              />
                <input
                  type="email"
                  className="TextInput"
                  name="email"
                  placeholder="Email"
                  autoComplete="new-password"
                  onChange={onChange}
              />

              <input
                  type="password"
                  className="TextInput"
                  name="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={onChange}
              />

              <input
                  type="password"
                  className="TextInput"
                  name="passwordRepeat"
                  placeholder="Password repeat"
                  autoComplete="new-password"
                  onChange={onChange}
              />
              <label className="TouchCheckboxlabel">
                  <input
                      type="checkbox"
                      className="TouchCheckbox"
                      name="termsAccepts"
                      onChange={onChange}
                  />
                       Accept Terms of Use!
              </label>
              <button 
                  disabled={!validateState(state)}
                  className={!validateState(state) ?  "Disabled" : null}
                  onClick={addRegisterHandler}
                  >
                  Register
              </button>
          </form>
    </div>
  )
}

export default SignUp