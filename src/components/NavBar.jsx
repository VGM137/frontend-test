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
        <Navbar.Brand href="#home">
          <img className="lateral" src={lateral} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
          <Nav >
            <Nav.Link style={{margin: 'auto 15px'}} className="blue-text" href="#home">HOME</Nav.Link>
            <NavDropdown style={{margin: 'auto 15px'}} title="FEATURES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{margin: 'auto 15px'}} href="#link">PRICING</Nav.Link>
            <Nav.Link style={{margin: 'auto 15px'}} href="#link">CONTACT</Nav.Link>
            <Button cN={'my-btn blue-transparent-btn nav-btn'} name={'LOGIN'} />
            <Button cN={'my-btn white-transparent-btn nav-btn'} name={'GET STARTED'} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default connect(null, null)(NavBar)