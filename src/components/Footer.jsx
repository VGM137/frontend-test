import React from 'react'
import { connect } from 'react-redux'
import fb from '../assets/static/facebook.png'
import lk from '../assets/static/linkedIn.png'
import tw from '../assets/static/twitter.png'
import footerBg from '../assets/static/footer-backg.png'
import Btn from './Btn'
import Text from './Text'
import '../assets/styles/Components/Footer.scss'

const Footer = () => {

  return (
    <div className='row w-100 m-auto mt-50 p-0 footer-container'>
      <img className='footer-bg-img m-0 p-0' src={footerBg} alt="" />
      <div className='row h-auto'>
        <div className='row footer-top h-50'>
          <div className='col-10 col-md-8 m-auto '>
            <Text 
              type={'double-regular'}
              bootstrap={'mt-5'}
              cN={'footer-main'}
              col={'col'} 
              tCol={'col-10'}
              pCol={'col-11'}
              pColMd={'col-md-12'}
              pColLg={'col-lg-8'}
              title1='Start'
              title2=' growing'
              title3=' your bussines'
              paragraph='Your issue is our main priority. Our 24/7 support team is here to help you and make sure our product is up to date. Have a presale question about question about our products and features? Or looking for a refund? We would love to hear what your concern is. Online awards and publications.'>
            </Text>
          </div>
          <div className='col-10 col-md-4 m-auto'>
            <Btn cN={'blue-solid-btn footer-btn'} name={'GET STARTED NOW!'} href={'/simulator'} id={'quoter'}/>
          </div>
        </div>
        <div className='row justify-content-center footer-bottom'>
        <div className='col-5 col-md-4 mr-5 mt-3 footer-legal'>
          <div className='footer-title'>LATERAL</div>
          <div className='footer-text'>Copyright 2018 LATERAL.</div>
          <div className='footer-text'>All Rights Reserved. Proudly made un EU</div>
          <div className='row footer-social'>
            <img className={'col-2'} src={tw} alt="" />
            <img className={'col-2'} src={fb} alt="" />
            <img className={'col-2'} src={lk} alt="" />
          </div>
        </div>
        <div className='col-5 col-md-2 mt-3 footer-info'>
          <div className='col-10 footer-title'>Company</div>
          <div className='col-10 footer-text'>About</div>
          <div className='col-10 footer-text'>Carrers</div>
          <div className='col-10 footer-text'>Awards</div>
          <div className='col-10 footer-text'>Users Program</div>
          <div className='col-10 footer-text'>Locations</div>
        </div>
        <div className='col-5 col-md-2 mt-3 footer-info'>
          <div className='col-10 footer-title'>Products</div>
          <div className='col-10 footer-text'>Integrations</div>
          <div className='col-10 footer-text'>API</div>
          <div className='col-10 footer-text'>Pricing</div>
          <div className='col-10 footer-text'>Documentation</div>
          <div className='col-10 footer-text'>Release Notes</div>
        </div>
        <div className='col-5 col-md-2 mt-3 footer-info'>
          <div className='col-10 footer-title'>Support</div>
          <div className='col-10 footer-text'>Contact</div>
          <div className='col-10 footer-text'>FAQ</div>
          <div className='col-10 footer-text'>Press</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, null)(Footer)