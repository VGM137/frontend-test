import React from 'react'
import { connect } from 'react-redux'
import support from '../assets/static/support-64.png'
import globe from '../assets/static/globe-64.png'
import wallet from '../assets/static/wallet-64.png'
import client1 from '../assets/static/clients-logo1.png'
import client2 from '../assets/static/clients-logo2.png'
import client3 from '../assets/static/clients-logo3.png'
import client4 from '../assets/static/clients-logo4.png'
import client5 from '../assets/static/clients-logo5.png'
import Text from './Text'
import Characteristics from './Characteristics'
import MyAccordion from './MyAccordion'
import QCards from './QCards'
import '../assets/styles/Components/Questions.scss'

const Questions = () => {

  return (
    <div className='row h-100 w-100'>
      <div className='row  w-100 p-0 m-auto justify-content-center'>
        <div className='col-5 m-0 questions-left'>
          <Text 
            type={'left-align'}
            bootstrap={'mt-5 ml-0'}
            cN={'questions'}
            col={'col'} 
            tCol={'col-10'}
            pCol={'col-11'}
            pColMd={'col-md-12'}
            pColLg={'col-lg-8'}
            title1='Frequently asked questions'
            paragraph='Have a presale question about our products and features? Or looking for a refund? We would like to hear what your concern is.'>
          </Text>
          <div className='col-10 justify-content-center m-auto'>
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Simple and Smart HTML code'}
              section={'questions'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Works reintegrated in any part of the layout'}
              section={'questions'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Reuse the elements from one design to another'}
              section={'questions'}/>}
          </div>
        </div>
        <div className='col-7 p-0 m-0'>
          <MyAccordion />
        </div>
      </div>
      <div className='row  w-100 p-0 m-auto justify-content-evenly'>
        <QCards 
          icon={support}
          cN={'qCards'}
          title1={'Help & Support'}
          paragraph={'Our 24/7 support team is here to help you and make sure our product is up to date.'}
          btnName={'support@supportemail.com'}
        />
        <QCards 
          icon={globe}
          cN={'qCards'}
          title1={'Media & Press'}
          paragraph={'Online awards and publications. Get our media resources and learn about our company.'}
          btnName={'media@youremail.com'}
        />
        <QCards 
          icon={wallet}
          cN={'qCards'}
          title1={'Sales'}
          paragraph={'Have a presale question about our products and features? Or looking for a refund'}
          btnName={'sales@salesemail.com'}
        />
      </div >
      <div className='row mt-5 mb-5 w-100 p-0  justify-content-center'>
        <img className='col-2' src={client1} alt="" />
        <img className='col-2' src={client2} alt="" />
        <img className='col-2' src={client3} alt="" />
        <img className='col-2' src={client4} alt="" />
        <img className='col-2' src={client5} alt="" />
      </div>
    </div>
  )
}

export default connect(null, null)(Questions)