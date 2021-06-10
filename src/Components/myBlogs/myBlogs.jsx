import React,{useEffect,useState} from 'react'
import {url} from '../../backend'
import BlogCard from './blogCard'
import Header from '../Homepage/Header'
import BlogPage from '../BlogPage/blogPage'
import axios from 'axios'
import './blogs.css'

const MyBlogs = ()=>{
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [renderBlog,setRenderBlog] = useState(false);
    const [edit,setEdit] = useState(false);

    const [value,setValue] = useState({
        _id:'',
        heading:'',
        sub_heading:'',
        author:'',
        content:'',
        image: '',
        claps:'',
        dislikes:'',
        comment:''
    })

    useEffect(()=>{
        axios.get(url+'/blog',{
            headers:{
                authorization:localStorage.getItem('token')
            }
        })
        .then((response)=>{
                console.log(response)
                setData(response.data)
                setIsLoading(false);
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    const back = ()=>{
        setRenderBlog(false);
    }
    
    const showBlog = (id)=>{
        let res = data.filter(obj=>obj._id===id)
        console.log(res);
        setValue(res[0]);
        setRenderBlog(true)
    }
    
    const deleteBlog =()=>{
        axios.delete(url+`/blog/deleteBlog/${value._id}`,{
            headers:{
                authorization:localStorage.getItem('token')
            }
        })
        .then(response=>{
            window.location.reload();
        })
        .catch(err=>{
            console.log(err)
            alert('Please retry after logging in')
        })
    }

    const changeVals = (name, val) => {
        setValue({
            ...value,
            [name]: val
        })
    }

    const changeHandler = (e)=>{
        e.preventDefault();
        const data = {
            heading: value.heading,
            sub_heading:value.sub_heading,
            content: value.content,
            image:value.image
        }
        axios.patch(url+`/blog/updateBlog/${value._id}`,data,{
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
        .then((response=>{
            console.log(response);
            window.location.reload();
        }))
        .catch(err=>{
            console.log(err)
            alert('please retry')
        })

    }

   if(!isLoading && !renderBlog && !edit){
       return <>
       <Header sideMenu={['Create Blog','My Blogs','Log out',JSON.parse(localStorage.getItem('user_info')).user_name]} />
       <section className="blog-pages-wrapper">
            {
                data.map(obj=>{
                    return <BlogCard onClick={showBlog} data={{heading:obj.heading, sub_heading: obj.sub_heading, image:obj.image, date: obj.date.substr(0,10),_id:obj._id}}/>
                })
            }
       </section>
       </>
   }
   else if(isLoading){
       return <div>Loading...</div>
   }
   else if(!isLoading && renderBlog && !edit){
       return <>
            <Header sideMenu={['Create Blog','My Blogs','Log out',JSON.parse(localStorage.getItem('user_info')).user_name]} />
            <div className="buttons-" style={{marginTop:'15px', marginLeft:'63px'}}>
                <button onClick={deleteBlog} className="btn btn-warning" style={{marginRight:'10px'}}>Delete</button>
                <button onClick={()=>{setEdit(true)}} className="btn btn-warning">Edit</button>
            </div>
            <BlogPage value={value} back={back}/>
       </>
   }
   else if(edit){
    return <>
        <Header sideMenu={['Create Blog','My Blogs','Log out',JSON.parse(localStorage.getItem('user_info')).user_name]} />
        <form>
            <div className="container">
                <h1>Edit Blog</h1>
                <label htmlFor="heading"><b>Heading</b></label>
                <input type="text" placeholder="Enter Heading" name="heading" id="heading" required value={value.heading} onChange={(e) => changeVals('heading', e.target.value)} />
                <label htmlFor="sub_heading"><b>Sub heading</b></label>
                <input type="text" placeholder="Enter Sub heading" name="sub_heading" id="sub_heading" required value={value.sub_heading} onChange={(e) => changeVals('sub_heading', e.target.value)} />
                <label htmlFor="image"><b>Image Link</b></label>
                <input type="text" placeholder="Enter image link" name="image" id="image" required value={value.image} onChange={(e) => changeVals('image', e.target.value)} />
                <label htmlFor="content"><b>Content</b></label>
                <textarea name="content" id="content" cols="30" rows="10" placeholder="Content" required value={value.content} onChange={(e) => changeVals('content', e.target.value)}></textarea>
                <button type="submit" className="registerbtn" onClick={changeHandler}>Change</button>
            </div>
        </form>
        </>
   }
   return <></>
}

export default MyBlogs;