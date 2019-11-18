import React, { useState } from 'react';
import './login.css';

function Login() {
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: ''
    })

    const changeHandle = e => {
        switch (e.target.name) {
            case 'userName':
                if (/^[a-zA-Z0-9]*$/.test(e.target.value)) {
                    setLoginForm({
                        ...loginForm,
                        [e.target.name]: e.target.value
                    });
                }
                break;
            case 'password':
                setLoginForm({
                    ...loginForm,
                    [e.target.name]: e.target.value
                });
                break;
        }
        console.log(loginForm)
    }
    const submitForm = e => {
        e.preventDefault();
        setLoginForm({
            userName: '',
            password: ''
        })
        console.log(loginForm)
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