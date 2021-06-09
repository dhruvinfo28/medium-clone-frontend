import React from 'react'
//import { Button} from '@material-ui/core';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './Header.css'

const Header = ({sideMenu}) => {

    return (
    <div className="Navbar__section">
        <Navbar collapseOnSelect expand="lg" bg="#FFC017">
        <Navbar.Brand href="#home">
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
                   return <Nav.Link href="#">{option}</Nav.Link>
               })
           }
        <button>Get Started</button>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default Header;