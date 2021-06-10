import React, { useEffect, useState } from 'react'
import { url } from '../../backend'
import axios from 'axios'
import './blogPage.css'

const BlogPage = ({ value, back }) => {
    console.log(value)
    const [likes, setLikes] = useState(value.claps.liked_by.length)
    const [disLikes, setDisLikes] = useState(value.dislikes.liked_by.length)

    const likeBlog = () => {
        console.log(value._id);
        if (localStorage.getItem('loggedIn') === 'true') {
            let user = JSON.parse(localStorage.getItem('user_info'))
            user = user.user_email
            axios.get(url + `/like/${value._id}`, {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            .then(response => {
                    setLikes((prevState) => {
                        return prevState + 1;
                    })
                    console.log(response)
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            alert('Login and then retry')
        }
    }
    const dislikeBlog = () => {
        if (localStorage.getItem('loggedIn') === 'true') {
            let user = JSON.parse(localStorage.getItem('user_info'))
            user = user.user_email
            axios.get(url + `/dislike/${value._id}`, {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
                .then(response => {
                    setDisLikes(prevState => {
                        return prevState + 1;
                    })
                    console.log(response)
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            alert('Login and then retry')
        }
    }
    return (<article className='main-blog-container'>
        <div className="children child1">
            <button onClick={back} style={{ marginBottom: '10px' }} className="btn btn-warning">Back</button>
            <p onClick={likeBlog} className='interact'>
                Claps: {likes}
            </p>
            <p>
                Date: {value.date.substr(0, 10)}
            </p>
            <p>
                Comments: {value.comment.commented_by.length}
            </p>
            <p onClick={dislikeBlog} className='interact'>
                Dislikes:  {disLikes}
            </p>
        </div>
        <div className="children child2">
            <h1>
                {value.heading}
            </h1>
            <h5>
                {value.sub_heading}
            </h5>
            <h6>
                Author: {value.author}
            </h6>
            <img src={value.image} alt="" />
            <p style={{ marginTop: '25px' }}>
                {value.content}
            </p>
        </div>
    </article>)
}

export default BlogPage;