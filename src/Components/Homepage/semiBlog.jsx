import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './semiBlog.css'
import {url} from '../../backend'


const SemiBlog = ({renderBlog})=>{

    const [isLoading, setIsLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get(url+'/blogs')
        .then(response=>{
            console.log(response.data);
            console.log('Here')
            setData(response.data)
            setIsLoading(false);
        })
        .catch(err=>{
            console.log(err);
        })
        
    },[])

    const blogRender = (id)=>{
        const params = data.filter(obj=>obj._id == id);
        console.log(params);
        renderBlog(params[0])
    }

    if(!isLoading){
        return  <React.Fragment>
            <div className="blog-container">
                {data.map(obj=>{
                    return <div className="semi-blog-wrapper" onClick={()=>blogRender(obj._id)}>
                        <h1 className="">{obj.heading}</h1>
                        <h3 className="">{obj.sub_heading}</h3>
                        <div className="semi-blog-sub-wrapper">
                            <h5 className="third-level">{obj.date}</h5>
                            <img src={obj.image} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </React.Fragment>
    }else{
        return <div>Loading.....</div>
    }
};

export default SemiBlog;