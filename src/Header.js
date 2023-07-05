import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "./images/logo.jpg"
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="navmain pb-5 pt-5" >
      <Container className="navsub">
        <Navbar key={"lg"} expand={"lg"}className="" >
          <Container fluid>
            <Navbar.Brand href="#" className="mainname"> <img src={logo}className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} ><FaBars className="toog"/></Navbar.Toggle>
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className="w-75"
            >
              <Offcanvas.Header closeButton>  
                <Offcanvas.Title className="offcanvas" id={`offcanvasNavbarLabel-expand-lg`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5 navcolor">
               <Link className="head1 ms-5 text-light" to={'/'}>Home</Link>
               <Link  className="ms-5 text-light skill-line" to={"/Skill"}>Skill</Link>
               <Link className="ms-5 text-light head1" to={'/About'}>About</Link>
               <Link className="ms-5 text-light head1" to={'/Contact'}>Contact</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
