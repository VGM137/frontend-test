import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Quoter from "../components/Quoter";


import '../assets/styles/Components/Home.scss'

const Simulator = () => {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <Quoter />
    </Container >
  )
}

export default connect(null, null)(Simulator)