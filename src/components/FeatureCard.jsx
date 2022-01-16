import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Text from './Text'
import '../assets/styles/Components/Features.scss'

const FeaturesCard = ({icon,   type, tCol, tColSm, tColMd, tColLg, pCol, pColSm, pColMd, pColLg, height, cN, title1, title2, title3, paragraph}) => {
  return (
    <Container className='col-10 col-md-4' style={{height: '90%', marginTop: '50px'}}>
      <div className='col-12 col-lg-10' style={{margin: 'auto'}}>
        <img src={icon} alt="" />
      </div>
      <Text 
        cN={'icon'}
        type={type}
        title1={title1}
        title2={title2}
        title3={title3}
        tCol={tCol}
        pCol={pCol}
        tColLg={tColLg}
        pColLg={pColLg}
        paragraph={paragraph}
      />
    </Container>
  )
}

export default connect(null, null)(FeaturesCard)