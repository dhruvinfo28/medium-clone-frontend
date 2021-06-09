import React, { useState } from 'react'
import Header from '../Homepage/Header'
import axios from 'axios'
import {url} from '../../backend'

import './auth.css'
const Registration = ()=>{
    const [inputs,setInputs] = useState({
        first_name:'',
        last_name:'',
        user_name:'',
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
        axios.post(url+'/users/signup',inputs)
        .then(response=>{
            setInputs({
                first_name:'',
                last_name:'',
                user_name:'',
                user_email:'',
                user_password:''
            })
            window.location.href = '/login';
        })
        .catch(err=>{
            console.log(err);
            alert('Please retry')
        })
    }

    return <>
    <Header sideMenu={[]} btn={false} />
        <form onSubmit={submitHandler}>
        <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <label htmlFor="first_name"><b>First Name</b></label>
        <input type="text" placeholder="First Name" name="first_name" id="first_name" required value={inputs.first_name} onChange={(e)=>{changeVals('first_name',e.target.value)}}/>
        <label htmlFor="last_name"><b>Last Name</b></label>
        <input type="text" placeholder="Last Name" name="last_name" id="last_name" required value={inputs.last_name} onChange={(e)=>{changeVals('last_name',e.target.value)}}/>
        <label htmlFor="user_name"><b>User Name</b></label>
        <input type="text" placeholder="User Name" name="user_name" id="user_name" required value={inputs.user_name} onChange={(e)=>{changeVals('user_name',e.target.value)}}/>
        <label htmlFor="user_email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="user_email" id="user_email" required value={inputs.user_email} onChange={(e)=>{changeVals('user_email',e.target.value)}}/>
        <label htmlFor="user_password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="user_password" id="user_password" required value={inputs.user_password} onChange={(e)=>{changeVals('user_password',e.target.value)}}/>


        <button type="submit" className="registerbtn">Register</button>
        </div>
        
        <div className="container signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
        </div>
        </form>
    </>
}

export default Registration;