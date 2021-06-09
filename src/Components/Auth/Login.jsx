import React from 'react'
import Header from '../Homepage/Header'

import './auth.css'
const Login = ()=>{
    return <>
    <Header sideMenu={[]} />
        <form>
        <div class="container">
        <h1>Sign In</h1>
        <label for="user_email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="user_email" id="user_email" required/>

        <label for="user_password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="user_password" id="user_password" required/>


        <button type="submit" class="registerbtn">Login</button>
        </div>
        
        <div class="container signin">
        <p>Don't have an account? <a href="/signup">Sign Up</a>.</p>
        </div>
        </form>
    </>
}

export default Login;