import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Text from './Text'
import Tab from './Tab'
import PricingPlans from './PricingPlans'
import Characteristics from './Characteristics'
import '../assets/styles/Components/Pricing.scss'

const Pricing = (props) => {

  const isMonthly = props.pricingActiveBtn.monthly
  const isYearly = props.pricingActiveBtn.yearly

  return (
    <>
    {isMonthly &&
      <Container id='pricing' className='pricing' style={{height: 'auto', width:'100vw'}}>
      <Text 
        cN={'my-card'}
        col={'col'} 
        pCol={'col-12'}
        pColMd={'col-md-9'}
        pColLg={'col-lg-7'}
        height={'auto'}
        title1='Flexible Pricing'
        paragraph='We believe we hace created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS bussines.'>
      </Text>
      <Tab section={'pricing'} />
      <div className='row' style={{height: 'auto' }}>
        <PricingPlans 
          title1={'FREE'}
          price={'0'}
          title3={'/ month'}
          plan={'free'}>
          {<Characteristics 
            isCheck={'true'} 
            characteristic1={'1 '}
            characteristic2={'User Account'}/>}
          {<Characteristics 
            isCheck={'true'} 
            characteristic1={'10 '}
            characteristic2={'Team Members'}/>}
          {<Characteristics 
            isCheck={'true'} 
            characteristic1={'Unlimited '}
            characteristic2={'Emails Accounts'}/>}
          {<Characteristics 
            isCheck={'true'} 
            characteristic2={'Set And Manage Permissions'}/>}
          {<Characteristics 
            isCheck={'false'} 
            characteristic2={'API & extension support'}/>}
          {<Characteristics 
            isCheck={'false'} 
            characteristic2={'Developer support'}/>}
          {<Characteristics 
            isCheck={'false'} 
            characteristic2={'A / B Testing'}/>}
        </PricingPlans >
        <PricingPlans 
          title1={'STARTUP'}
          price={'29'}
          title3={'/ month'}
          plan={'startup'}>
            {<Characteristics 
            isCheck={'true'} 
            characteristic1={'10 '}
            characteristic2={'User Account'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'100 '}
              characteristic2={'Team Members'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'Unlimited '}
              characteristic2={'Emails Accounts'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Set And Manage Permissions'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'API & extension support'}/>}
            {<Characteristics 
              isCheck={'false'} 
              characteristic2={'Developer support'}/>}
            {<Characteristics 
              isCheck={'false'} 
              characteristic2={'A / B Testing'}/>}
        </PricingPlans >
        <PricingPlans 
          title1={'PRO'}
          price={'49'}
          title3={'/ month'}
          plan={'pro'}>
            <div className='triangle-container'>
              <div className='pro-triangle'>
                <p className='pro-triangle-text'>POPULAR</p>
              </div>
            </div>
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'50 '}
              characteristic2={'User Account'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'500 '}
              characteristic2={'Team Members'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'Unlimited '}
              characteristic2={'Emails Accounts'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Set And Manage Permissions'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'API & extension support'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Developer support'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'false'} 
              characteristic2={'A / B Testing'}/>}
        </PricingPlans >
        <PricingPlans 
          title1={'ULTRA'}
          price={'99'}
          title3={'/ month'}
          plan={'ultra'}>
            {<Characteristics 
            isCheck={'true'} 
            characteristic1={'Unlimited '}
            characteristic2={'User Account'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'Unlimited '}
              characteristic2={'Team Members'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'Unlimited '}
              characteristic2={'Emails Accounts'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Set And Manage Permissions'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'API & extension support'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Developer support'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'A / B Testing'}/>}
        </PricingPlans >
      </div>
    </Container>
    }
    {isYearly &&
      <Container id='pricing' className='pricing' style={{height: 'auto', width:'100vw'}}>
      <Text 
        cN={'my-card'}
        col={'col'} 
        pCol={'col-12'}
        pColMd={'col-md-9'}
        pColLg={'col-lg-7'}
        height={'auto'}
        title1='Flexible Pricing'
        paragraph='We believe we hace created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS bussines.'>
      </Text>
      <Tab section={'pricing'} />
      <div className='row' style={{height: 'auto' }}>
        <PricingPlans 
          title1={'FREE'}
          price={'0'}
          title3={'/ year'}
          plan={'free'}>
          {<Characteristics 
            isCheck={'true'} 
            characteristic1={'1 '}
            characteristic2={'User Account'}/>}
          {<Characteristics 
            isCheck={'true'} 
            characteristic1={'10 '}
            characteristic2={'Team Members'}/>}
          {<Characteristics 
            isCheck={'true'} 
            characteristic1={'Unlimited '}
            characteristic2={'Emails Accounts'}/>}
          {<Characteristics 
            isCheck={'true'} 
            characteristic2={'Set And Manage Permissions'}/>}
          {<Characteristics 
            isCheck={'false'} 
            characteristic2={'API & extension support'}/>}
          {<Characteristics 
            isCheck={'false'} 
            characteristic2={'Developer support'}/>}
          {<Characteristics 
            isCheck={'false'} 
            characteristic2={'A / B Testing'}/>}
        </PricingPlans >
        <PricingPlans 
          title1={'STARTUP'}
          price={'384'}
          title3={'/ year'}
          plan={'startup'}>
            {<Characteristics 
            isCheck={'true'} 
            characteristic1={'10 '}
            characteristic2={'User Account'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'100 '}
              characteristic2={'Team Members'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'Unlimited '}
              characteristic2={'Emails Accounts'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Set And Manage Permissions'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'API & extension support'}/>}
            {<Characteristics 
              isCheck={'false'} 
              characteristic2={'Developer support'}/>}
            {<Characteristics 
              isCheck={'false'} 
              characteristic2={'A / B Testing'}/>}
        </PricingPlans >
        <PricingPlans 
          title1={'PRO'}
          price={'588'}
          title3={'/ year'}
          plan={'pro'}>
            <div className='triangle-container'>
              <div className='pro-triangle'>
                <p className='pro-triangle-text'>POPULAR</p>
              </div>
            </div>
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'50 '}
              characteristic2={'User Account'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'500 '}
              characteristic2={'Team Members'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'Unlimited '}
              characteristic2={'Emails Accounts'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Set And Manage Permissions'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'API & extension support'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Developer support'}
              plan={'pro'}/>}
            {<Characteristics 
              isCheck={'false'} 
              characteristic2={'A / B Testing'}/>}
        </PricingPlans >
        <PricingPlans 
          title1={'ULTRA'}
          price={'1,188'}
          title3={'/ year'}
          plan={'ultra'}>
            {<Characteristics 
            isCheck={'true'} 
            characteristic1={'Unlimited '}
            characteristic2={'User Account'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'Unlimited '}
              characteristic2={'Team Members'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic1={'Unlimited '}
              characteristic2={'Emails Accounts'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Set And Manage Permissions'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'API & extension support'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'Developer support'}/>}
            {<Characteristics 
              isCheck={'true'} 
              characteristic2={'A / B Testing'}/>}
        </PricingPlans >
      </div>
    </Container>
    }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pricingActiveBtn: state.pricingActiveBtn,
  }
}

export default connect(mapStateToProps, null)(Pricing)