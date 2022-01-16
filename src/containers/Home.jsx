import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Features from "../components/Features";
import Api from '../components/Api'
import Pricing from "../components/Pricing";
import Map from "../components/Map";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import background from '../assets/static/background1.png'

import '../assets/styles/Components/Home.scss'

const Home = () => {
  return (
    <Container fluid className="p-0">
      <div>
        <img className="background" src={background} alt="" />
      </div>
      <NavBar />
      <Hero />
      <Features />
      <Api />
      <Pricing />
      <Map />
      <Questions />
      <Footer />
    </Container >
  )
}

export default connect(null, null)(Home)