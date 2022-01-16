import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import play from '../assets/static/btn-play.png'
import quoter from '../assets/static/quoter.png'
import Text from './Text';
import Btn from './Btn';
import GifDisplay from './GifDisplay';
import '../assets/styles/Components/Hero.scss'

const Hero = () => {
  return(
    <>
      <Container style={{height: 'auto'}} className='row justify-content-center m-auto p-10 hero-container'>
        <GifDisplay />
        <div className='col col-md-6'>
          <Text 
            type={'left-align'}
            cN={'hero'} 
            tCol={'col'} 
            tColMd={'col-md-10'} 
            tColLg={'col-lg-10'}
            pCol={'col-10'}
            pColSm={'col-sm-7'}
            pColMd={'col-md-12'}
            title1={'Build aplications'} 
            title2={'faster'} 
            paragraph={'Hire experts & get your job done. The right IT security solutions. Protect your clients and computer systems from hackers and fight against malware.'}>
          </Text>
          <>
            <p className='col-12 blue-text'>For as long as <b className='purple-text'>$0.95</b> per user account</p>
          </>
          <div className='row mt-3'>
            <Btn 
              cN='col-5 col-sm-5 col-lg-5 h-100 m-auto m-sm-3 blue-solid-btn' 
              name='WATCH DEMO'  
              icon={play}
              id={'watch'}> 
            </Btn>
            <Btn 
              cN='col-5 col-sm-4 col-lg-5 h-100 m-auto m-sm-3 purple-solid-btn' 
              name='START NOW' 
              href={'/simulator'} 
              id={'start-now'}>
            </Btn>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 hero-img-container justify-content-center'>
          <img className='col-6 col-md-8 col-lg-7  hero-img' src={quoter} alt="" />
        </div>
      </Container>
    </>
  )
}

export default connect(null, null)(Hero);
