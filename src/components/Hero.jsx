import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import play from '../assets/static/btn-play.png'
import Text from './Text';
import Btn from './Btn';
import '../assets/styles/Components/Hero.scss'

const Hero = () => {
  return(
    <>
      <Container style={{height: '80vh'}} className='p-10'>
        <Text 
          cN={'hero'} 
          tCol={'col-10'} 
          tColMd={'col-md-8'} 
          tColLg={'col-lg-6'}
          pCol={'col'}
          title1={'Build aplications'} 
          title2={'faster'} 
          paragraph={'Hire experts & get your job done. The right IT security solutions. Protect your clients and computer systems from hackers and fight against malware.'}>
        </Text>
        <>
          <p className='col-12 blue-text'>For as long as <b className='purple-text'>$0.95</b> per user account</p>
        </>
        <div className='row mt-3'>
          <Btn cN='col-5 col-sm-4 col-lg-3 h-100 m-3 blue-solid-btn' name='WATCH DEMO'  icon={play}></Btn>
          <Btn cN='col-5 col-sm-3 col-lg-2 h-100 m-3 purple-solid-btn' name='START NOW' href={'/simulator'} id={'start-now'}></Btn>
        </div>
      </Container>
    </>
  )
}

export default connect(null, null)(Hero);
