import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import NavBar from '../components/NavBar'
import Pricing from "../components/Pricing";

import '../assets/styles/Components/Home.scss'

const PricingLanding = () => {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <Pricing />
    </Container >
  )
}

export default connect(null, null)(PricingLanding)