import './App.css';
import {useState,useEffect} from 'react';
import Header from './Components/Homepage/Header';
import Carousal from './Components/Homepage/Carousal';
import SemiBlog from './Components/Homepage/semiBlog'
import Footer from './Components/Homepage/footer';
import BlogPage from './Components/BlogPage/blogPage'
import { render } from 'react-dom';


// {heading,sub_heading,author,claps,dislikes,comment,content,date}

function App() {
  const [renderB, setRenderB] = useState(false);
  const [currBlog,setCurrBlog] = useState({
    heading:'',
    sub_heading:'',
    author:'',
    date:'',
    content:'',
    claps:'',
    dislikes:'',
    comment:'',
    image:''
  })

  useEffect(()=>{
      if(currBlog.heading!==''){
        console.log('In use effect')
        console.log(currBlog)
        setRenderB(true);
      }
  },[currBlog])

  const renderBlog = ({heading,sub_heading,author,claps,dislikes,comment,content,date,image})=>{
    console.log('In Appjs')
    // console.log(heading)
      setCurrBlog({
        heading,
        sub_heading,
        author,
        claps,
        dislikes,
        content,
        comment,
        date,
        image
      })
  }
  
  const back = ()=>{
      setRenderB(false);
  }

  return (
    <div className="App">
      <Header sideMenu={['Our Story','MemberShip','Write','SignIn']}/>
      {renderB && <BlogPage value={currBlog} back={back}/>}
      {!renderB && <Carousal />}
      {!renderB && <SemiBlog renderBlog={renderBlog}/>}
      <Footer/>
    </div>
  );
}

export default App;
