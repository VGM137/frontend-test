import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Text from './Text'
import Btn from './Btn'
import Characteristics from './Characteristics'
import '../assets/styles/Components/PricingPlans.scss'

const PricingPlans = ({children, title1, price, title3, plan}) => {
  return (
    <div className={`col-7 col-sm-5 col-lg-3 pricing-plan ${plan} pricing-${plan}`} style={{margin: '50px auto'}}>
      <div className='row pricing-plan-info align-middle'>
        <Text 
          cN={`my-card ${plan}`}
          col={'col'} 
          pCol={'col-10'}
          pColMd={'col-md-7'}
          pColLg={'col-lg-5'}
          height={'20%'}
          type={'pricing'}
          title1={title1}
          price={price}
          title3={title3}>
        </Text>
        {children}
        <div className='row h-10' style={{display: 'flex', justifyContent: 'center', margin: '20px auto'}}>
          <Btn cN={`col-6 justify-content-center ${plan == 'pro' ? 'blue-solid-btn' : 'blue-transparent-btn'}`} name={'Sign up'} />
        </div>
      </div>
    </div>
  )
}

export default connect(null, null)(PricingPlans)