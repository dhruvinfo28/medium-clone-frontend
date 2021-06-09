import React, { useState } from 'react'
import Header from '../Homepage/Header'
import axios from 'axios'
import {url} from '../../backend'

import './auth.css'
const Login = ()=>{
    const [inputs,setInputs] = useState({
        user_email:'',
        user_password:''
    })

    const changeVals = (name,value)=>{
        setInputs({
            ...inputs,
            [name]:value
        })
    }
    
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post(url+'/users/login',inputs)
        .then(response=>{
            localStorage.setItem('token',response.data.token)
            window.location.href='/';
        })
        .catch(err=>{
            console.log(err)
            alert('Please retry')
        })
    }
    return <>
    <Header sideMenu={[]} />
        <form onSubmit={submitHandler}>
        <div className="container">
        <h1>Sign In</h1>
        <label htmlFor="user_email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="user_email" id="user_email" required value={inputs.user_email}
        onChange={(e)=>changeVals('user_email',e.target.value)}/>

        <label htmlFor="user_password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="user_password" id="user_password" required value={inputs.user_password} onChange={(e)=>changeVals('user_password',e.target.value)}/>


        <button type="submit" className="registerbtn">Login</button>
        </div>
        
        <div className="container signin">
        <p>Don't have an account? <a href="/signup">Sign Up</a>.</p>
        </div>
        </form>
    </>
}

export default Login;