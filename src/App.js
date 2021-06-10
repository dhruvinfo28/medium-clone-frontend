import './App.css';
import {useState,useEffect} from 'react';
import Header from './Components/Homepage/Header';
import Carousal from './Components/Homepage/Carousal';
import SemiBlog from './Components/Homepage/semiBlog'
import Footer from './Components/Homepage/footer';
import BlogPage from './Components/BlogPage/blogPage'
import Login from './Components/Auth/Login'
import Registration from './Components/Auth/Registration'
import Dropdown from './Components/dropdown/dropdown'
import CreateBlog from './Components/createBlog/createBlog'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import {url} from './backend'

import axios from 'axios'

// {heading,sub_heading,author,claps,dislikes,comment,content,date}


function App() {
  const [renderB, setRenderB] = useState(false);
  const [headerInfo,setHeaderInfo] = useState(['SignIn'])
  const [getStarted,setGetStarted] = useState(true);

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

  //To render a fulll blog
  useEffect(()=>{
      if(currBlog.heading!==''){
        console.log('In use effect')
        console.log(currBlog)
        setRenderB(true);
      }
  },[currBlog])

  const renderBlog = ({heading,sub_heading,author,claps,dislikes,comment,content,date,image,_id})=>{
    console.log('In Appjs')
    // console.log(heading)
      setCurrBlog({
        _id,
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

  //To fetch user login information
  useEffect(()=>{
    let token = localStorage.getItem('token');
    if(token){
      axios.get(url+'/users/getLoggedInUser',{
        headers:{
          authorization: token
        }
      })
      .then(response=>{
        //Verified
        console.log(response.data)
        localStorage.setItem('loggedIn',true);
        localStorage.setItem('user_info',JSON.stringify(response.data))
        setHeaderInfo(['Create Blog','My Blogs','Log out',response.data.user_name])
        setGetStarted(false);
      })
    }else{
      //NO token
    }
  },[])
  
  return (
    <Router>
    <Route exact path='/'>
      <div className="App">
        <Header sideMenu={headerInfo} btn={getStarted}/>
        {renderB && <BlogPage value={currBlog} back={back}/>}
        {!renderB && <Carousal btn={getStarted}/>}
        {!renderB && <SemiBlog renderBlog={renderBlog}/>}
        <Footer/>
      </div>
    </Route>
    <Route exact path= "/signup">
        <Registration/>
    </Route>
    <Route exact path= "/login">
      <Login/>
    </Route>
    <Route exact path='/createBlog'>
      {localStorage.getItem('loggedIn')==='true'? <><Header sideMenu={headerInfo} btn={getStarted}/>
        <CreateBlog /></>: <div>Please Login</div>}
      
    </Route>
    </Router>
  );
}

export default App;
