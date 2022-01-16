import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import responsive from '../assets/static/responsive-64.png'
import desktop from '../assets/static/desktop-chart-64.png'
import browser from '../assets/static/browser-64.png'
import desktopWindows from '../assets/static/desktop-windows-64.png'
import customizer from '../assets/static/customizer-64.png'
import users from '../assets/static/users-64.png'
import Text from './Text'
import FeatureCard from './FeatureCard'
import '../assets/styles/Components/Features.scss'

const Features = () => {
  return (
    <Container className='mb-3 features-container' style={{height: 'auto'}}>
      <Text 
        cN={'my-card'}
        col={'col'} 
        pCol={'col-10'}
        pColMd={'col-md-7'}
        pColLg={'col-lg-5'}
        height={'20%'}
        title1='Features designed for you'
        paragraph='We believe we hace created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS bussines.'>
      </Text>
      <div className='row' /* style={{height: '40%'}} */>
        <FeatureCard
          type={'first-regular'}
          icon={responsive}
          title1={'Responsive '}
          title2={'Layout Template'}
          tCol={'col'}
          pCol={'col'}
          tColLg={'col-lg-10'}
          pColLg={'col-lg-10'}
          paragraph={'Responsive code that makes your landing page look good on all devices (desktops, tablets and, phones). Created with mobil e specialist.'}
        />
        <FeatureCard
          type={'first-bold'}
          icon={desktop}
          title2={'SaaS Landing Page '}
          title1={'Analysis'}
          tCol={'col'}
          pCol={'col'}
          tColLg={'col-lg-10'}
          pColLg={'col-lg-10'}
          paragraph={'A perfect structure created after we analized trends in SaaS landing page designs. Analysis made to the most popular SaaS bussines.'}
        />
        <FeatureCard
          type={'double-bold'}
          icon={browser}
          title2={'Smart '}
          title1={'BEM '}
          title3={'Grid'}
          tCol={'col'}
          pCol={'col'}
          tColLg={'col-lg-10'}
          pColLg={'col-lg-10'}
          paragraph={'Blocks, Elements and Modifiers. A smart HTML/CSS structure that can easely be reused. Layout driven by the purpose of modularity.'}
        />
      </div>
      <div className='row' /* style={{height: '40%'}} */>
        <FeatureCard
          type={'double-bold'}
          icon={desktopWindows}
          title2={'Multiple '}
          title1={'Unique '}
          title3={'Designs'}
          tCol={'col'}
          pCol={'col'}
          tColLg={'col-lg-10'}
          pColLg={'col-lg-10'}
          paragraph={'Choose between multiple unique designs and easy integrate elements from one design to another. Following the latest design trends.'}
        />
        <FeatureCard
          type={'first-regular'}
          icon={customizer}
          title1={'Flexible '}
          title2={'HTML Sections'}
          tCol={'col'}
          pCol={'col'}
          tColLg={'col-lg-10'}
          pColLg={'col-lg-10'}
          paragraph={'Simple and Smart HTML code that works reintegrated in any part of the layout. Reuse the elements from one design to another.'}
        />
        <FeatureCard
          type={'first-bold'}
          icon={users}
          title2={'User '}
          title1={'Friendly'}
          tCol={'col'}
          pCol={'col'}
          tColLg={'col-lg-10'}
          pColLg={'col-lg-10'}
          paragraph={'Easy to navigate. Made with user experience in mind, in order to provide the perfect landing page experience for your client.'}
        />
      </div>
    </Container>
  )
}

export default connect(null, null)(Features)