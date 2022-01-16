import React from 'react'
import { connect } from 'react-redux'
import gif from '../assets/static/intro-animation.gif'
import '../assets/styles/Components/GifDisplay.scss'

const GifDisplay = () => {

  const handleClick = (e) => {
    console.log(e)
    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.classList.add('hide')
  }

  return (
    <div id='gif-display' className='row gif-display hide'>
      <div className='col-11 gif-container '>
        <img className='gif' src={gif} alt="" />
        <button className='gif-button' onClick={(e) => handleClick(e)}>x</button>
      </div>
    </div>
  )
}

export default connect(null, null)(GifDisplay)