import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Profile from "../Profile"
function Login(props) {
   const [loginForm, setLoginForm] = useState({
       userName: '',
       password: ''
   })
  
   const changeHandle = e => {
       e.preventDefault()
       setLoginForm({...loginForm,[e.target.name]:e.target.value})
   }
   const submitForm = e => {
       e.preventDefault();
       props.history.push(`/profile/${loginForm.userName}`)
       axios.post("http://africanmarketplace.herokuapp.com/login",
       `grant_type=password&username=${loginForm.userName}&password=${loginForm.password}`,

      {
        
          headers:{
            Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
              'Content-Type': 'application/x-www-form-urlencoded',
              
          }, 
            
      },
      )
      .then(res => {
        localStorage.setItem("token",res.data.access_token)
        props.history.push(`/profile/${loginForm.userName}`)
        console.log(res.data)
      })
      .catch(err => console.log(err))
       setLoginForm({
           userName: '',
           password: ''
       })
   }
   return (
       <div className='login'>
           <div className='container'>
               <form onSubmit={submitForm} className='formLogin'>
                   <label htmlFor='userName' className='user'>Username:</label>
                   <input
                       className='input'
                       id='userName'
                       type='text'
                       name='userName'
                       placeholder='Enter Username'
                       required
                       onChange={changeHandle}
                       value={loginForm.userName}
                   />
                   <label htmlFor='password' className='pass'>Password:</label>
                   <input
                       className='input'
                       id='password'
                       type='password'
                       name='password'
                       placeholder='Enter Password'
                       required
                       onChange={changeHandle}
                       value={loginForm.password}
                   />
                   <button type='submit' className='loginButton'>Login</button>
               </form>
           </div>
       </div>
   )
}
export default Login;