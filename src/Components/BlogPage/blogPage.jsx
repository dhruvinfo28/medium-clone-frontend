import React,{useEffect,useState} from 'react'
import './blogPage.css'

const BlogPage = ({ value, back }) => {
    console.log(value)
        return (<article className='main-blog-container'>
            <div className="children child1">
                <p>
                Claps: {value.claps.liked_by.length}
                </p>
                <p>
                    Date: {value.date.substr(0,10)}
                </p>
                <p>
                   Comments: {value.comment.commented_by.length}
                </p>
                <p>
                  Dislikes:  {value.dislikes.liked_by.length}
                </p>
                <button onClick={back}>Back</button>
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
                <p>
                    {value.content}
                </p>
            </div>
        </article>)
}

export default BlogPage;