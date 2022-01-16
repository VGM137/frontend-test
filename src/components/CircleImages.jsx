import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/Components/CircleImages.scss'

const CircleImages = ({img, size, position}) => {

  return (
    <div className={`circle-container ${size} ${position}`}>
      <img className={`circle-img-${size}`} src={img} alt="" />
    </div>
  )
}

export default connect(null, null)(CircleImages)