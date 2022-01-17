import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "./Btn";
import lateral from "../assets/static/clients-logo3.png"
import { connect } from "react-redux";

import '../assets/styles/Components/NavBar.scss'

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#/">
          <img className="lateral" src={lateral} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
          <Nav >
            <Nav.Link style={{margin: 'auto 15px'}} className="blue-text" href="#/">HOME</Nav.Link>
            <NavDropdown style={{margin: 'auto 15px'}} title="FEATURES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/simulator">Responsive Layout Template</NavDropdown.Item>
              <NavDropdown.Item href="#/simulator">SaaS Landing Page</NavDropdown.Item>
              <NavDropdown.Item href="#/simulator">Smart BEM</NavDropdown.Item>
              <NavDropdown.Item href="#/simulator">Multiple Unique Designs</NavDropdown.Item>
              <NavDropdown.Item href="#/simulator">Flexible HTML</NavDropdown.Item>
              <NavDropdown.Item href="#/simulator">User Friendly</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{margin: 'auto 15px'}} href='#/pricing'>PRICING</Nav.Link>
            <Nav.Link style={{margin: 'auto 15px'}}>CONTACT</Nav.Link>
            <Button cN={'my-btn blue-transparent-btn nav-btn'} name={'LOGIN'} href={'/simulator'} id={'quoter'}/>
            <Button cN={'my-btn white-transparent-btn nav-btn'} name={'GET STARTED'} href={'/simulator'} id={'quoter'}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default connect(null, null)(NavBar)