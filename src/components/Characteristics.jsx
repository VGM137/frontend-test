import React from 'react'
import { connect } from 'react-redux'
import check from '../assets/static/checked-pricing.png'
import checkWhite from '../assets/static/checked-pricing-white.png'
import checked from '../assets/static/checked.png'
import '../assets/styles/Components/Characteristic.scss'

const Characteristic = ({isCheck, characteristic1, characteristic2, plan, section, bootstrap}) => {
  return (
    <div className='row'>
      <div className={`col-1 char-check char-check-${section}`}>
        {isCheck == 'true' && !plan && !section &&
          <img src={check} alt="" />
        }
        {isCheck == 'true' && plan &&
          <img src={checkWhite} alt="" />
        }
        {isCheck == 'true' && section &&
          <img className='p-0 justify-content-start' src={checked} alt="" />
        }
      </div>
      {isCheck == 'true'
        ?
          <div className={`col-10 char-text char-text-${section}`}>{<b>{characteristic1}</b>}{characteristic2}</div>
        :
          <div className='col-10 char-text char-strike-text' >{<strike>{characteristic2}</strike>}</div>
      }
    </div>
  )
}

export default connect(null, null)(Characteristic)