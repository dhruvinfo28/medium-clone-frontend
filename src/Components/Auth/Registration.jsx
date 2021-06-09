import React from 'react'
import Header from '../Homepage/Header'

import './auth.css'
const Registration = ()=>{
    return <>
    <Header sideMenu={[]} />
        <form>
        <div class="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <label for="first_name"><b>First Name</b></label>
        <input type="text" placeholder="First Name" name="first_name" id="first_name" required/>
        <label for="last_name"><b>Last Name</b></label>
        <input type="text" placeholder="Last Name" name="last_name" id="last_name" required/>
        <label for="user_name"><b>User Name</b></label>
        <input type="text" placeholder="User Name" name="user_name" id="user_name" required/>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="user_email" required/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="user_password" required/>


        <button type="submit" class="registerbtn">Register</button>
        </div>
        
        <div class="container signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
        </div>
        </form>
    </>
}

export default Registration;