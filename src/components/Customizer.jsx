import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { setAmount, setRate, increaseLeft } from '../actions'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import '../assets/styles/Components/Customizer.scss'

const Customizer = ({min, max, step, label, value, currency, id, bubble}) => {

  const dispatch = useDispatch()

  const amount = useSelector(state => state.amountCustomizer)
  const amountNumber = parseInt(amount)
  const range = useSelector(state => state.rateCustomizer)
  const rangeNumber = parseFloat(range)
  
  const amountBubble = useSelector(state => state.bubbles.amountBubble)
  const rangeBubble = useSelector(state => state.bubbles.rangeBubble)

  const handleChange = (e) => {

    const trackerLong = e.target.clientWidth
    const steps = e.target.step
    const stepDistance  = trackerLong/steps

    if(id == 'monto'){
      const current = e.target.value
      const currentNumber = parseInt(current)
      dispatch(setAmount(e.target.value))
      if(currentNumber > amountNumber){
        const dif = (currentNumber-amountNumber)/1000
        const change = dif*stepDistance
        const newLeft = amountBubble+change
        dispatch(increaseLeft({
          input: id,
          value: newLeft
        }))
      }
      if(currentNumber < amountNumber){
        const dif = (amountNumber-currentNumber)/1000
        const change = dif*stepDistance
        const newLeft = amountBubble-change
        dispatch(increaseLeft({
          input: id,
          value: newLeft
        }))
      }
    }
    
    if(id == 'tasa'){
      const current = e.target.value
      const currentNumber = parseFloat(current)
      dispatch(setRate(e.target.value))
      if(currentNumber > rangeNumber){
        const dif = (currentNumber-rangeNumber)/211
        const change = dif*stepDistance 
        const newLeft = rangeBubble+change    
        dispatch(increaseLeft({
          input: id,
          value: newLeft
        }))
      }
      if(currentNumber < rangeNumber){
        const dif = (rangeNumber-currentNumber)/211
        const change = dif*stepDistance
        const newLeft = rangeBubble-change
        dispatch(increaseLeft({
          input: id,
          value: newLeft
        }))
      }
    }
  }


  return (
    <div className='row justify-content-center'>
      <div className='col-10 col-md-8 customizer justify-content-center'>
        <div className='col-10 col-md-12 bubble-container'>
          <div 
          className='col-1 bubble speech' 
          style={{left: `${bubble}px`}}> 
            <span className='custom-value'>{id=='monto' ? `$${currency}` : `${parseFloat(value)}%`}</span> </div>
        </div>
        <label htmlFor="customRange1" className="col-12 form-label justify-content-end">{label}</label>
          <input 
            type="range" 
            className="form-range speech" 
            id="customRange1" 
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => handleChange(e)} />
      </div>
    </div>
  )
}

export default connect(null, null)(Customizer)