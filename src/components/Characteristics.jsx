import React from 'react'
import { connect } from 'react-redux'
import check from '../assets/static/checked-pricing.png'
import checkWhite from '../assets/static/checked-pricing-white.png'
import '../assets/styles/Components/Characteristic.scss'

const Characteristic = ({isCheck, characteristic1, characteristic2, plan}) => {
  return (
    <div className='row'>
      <div className='col-1 char-check'>
        {isCheck == 'true' && !plan &&
          <img src={check} alt="" />
        }
        {isCheck == 'true' && plan &&
          <img src={checkWhite} alt="" />
        }
      </div>
      {isCheck == 'true'
        ?
          <div className='col-10 char-text char-text'>{<b>{characteristic1}</b>}{characteristic2}</div>
        :
          <div className='col-10 char-text char-strike-text' >{<strike>{characteristic2}</strike>}</div>
      }
    </div>
  )
}

export default connect(null, null)(Characteristic)