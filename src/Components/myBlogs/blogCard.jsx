import React from 'react'
import './blogs.css'

const BlogCard = ({onClick,data})=>{
    return <>
        <article className="blog-card" onClick={()=>onClick(data._id)}>
            <div className="blog-card-child1">
                <h3>{data.heading}</h3>
                <h5>{data.sub_heading}</h5>
                <p>{data.date}</p>
            </div>
            <div className="blog-card-child2">
                <img src={data.image} alt="" />
            </div>
        </article>
    </>;
}

export default BlogCard;