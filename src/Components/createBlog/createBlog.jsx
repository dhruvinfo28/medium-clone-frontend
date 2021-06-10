import React, { useEffect, useState } from 'react'
import Header from '../Homepage/Header'
import axios from 'axios'
import { url } from '../../backend'
import '../Auth/auth.css'

const CreateBlog = () => {

    const [inputs, setInputs] = useState({
        heading: '',
        sub_heading: '',
        image: '',
        author: '',
        content: ''
    })

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user_info'))
        let author = user.first_name + ' ' + user.last_name
        setInputs({
            ...inputs,
            author,
        })
    }, [])

    const changeVals = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post(url+'/blog/createBlog',inputs,{
            headers:{
                authorization:localStorage.getItem('token')
            }
        })
        .then(response=>{
            console.log(response);
            window.location.href = '/'
        })
        .catch(err=>{
            console.log(err);
            alert('Please retry')
        })
    }
    return <>
        <form>
            <div className="container">
                <h1>Create Blog</h1>
                <label htmlFor="heading"><b>Heading</b></label>
                <input type="text" placeholder="Enter Heading" name="heading" id="heading" required value={inputs.heading} onChange={(e) => changeVals('heading', e.target.value)} />
                <label htmlFor="sub_heading"><b>Sub heading</b></label>
                <input type="text" placeholder="Enter Sub heading" name="sub_heading" id="sub_heading" required value={inputs.sub_heading} onChange={(e) => changeVals('sub_heading', e.target.value)} />
                <label htmlFor="image"><b>Image Link</b></label>
                <input type="text" placeholder="Enter image link" name="image" id="image" required value={inputs.image} onChange={(e) => changeVals('image', e.target.value)} />
                <label htmlFor="content"><b>Content</b></label>
                <textarea name="content" id="content" cols="30" rows="10" placeholder="Content" required value={inputs.content} onChange={(e) => changeVals('content', e.target.value)}></textarea>
                <button type="submit" className="registerbtn" onClick={submitHandler}>Publish</button>
            </div>
        </form>
    </>
}

export default CreateBlog;