import React from 'react'
import { connect } from 'react-redux'
import Text from './Text'
import Btn from './Btn'
import '../assets/styles/Components/QCards.scss'

const QCards = ({icon, cN, title1, paragraph, btnName}) => {

  return (
    <div className='col-3 justify-content-evenly qcard-container'>
      <div className='col-3 justify-content-left qcard-icon-container'>
        <img className='qcard-icon' src={icon} alt="" />
      </div>
      <Text 
        cN={cN}
        title1={title1}
        paragraph={paragraph}
        type={'qCards'}
      />
      <div className='row'>
        <Btn 
          bootsrap={'col-auto'}
          cN={'purple-solid-btn thin'}
          name={btnName}
        />
      </div>
    </div>
  )
}

export default connect(null, null)(QCards)