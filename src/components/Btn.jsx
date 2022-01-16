import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/Components/Button.scss'

const Btn = ({id, cN, func, name, icon}) => {
  return (
    <button id={id} className={`my-btn ${cN}`} style={{display: 'flex', justifyContent: 'space-evenly', position: 'relative', zIndex: '1'}} variant="outline-primary">{name}
      {icon &&
        <img className='' style={{height: '1.5em'}} src={icon}></img>
      }
    </button>
  )
}

export default connect(null, null)(Btn)