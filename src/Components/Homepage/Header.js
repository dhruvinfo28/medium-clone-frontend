import React from 'react'
//import { Button} from '@material-ui/core';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './Header.css'

const Header = ({sideMenu,btn}) => {

    return (
    <div className="Navbar__section">
        <Navbar collapseOnSelect expand="lg" bg="#FFC017">
        <Navbar.Brand href="/">
            <img 
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt=""
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
       </Nav>
       <Nav className="Navbar__right">
           {
               sideMenu.map(option=>{
                   if(option==='SignIn') return <Nav.Link href="/login">{option}</Nav.Link>
                   return <Nav.Link href="#">{option}</Nav.Link>
               })
           }
           {btn && <button onClick={()=>window.location.href='/signup'}>Get Started</button>}
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default Header;