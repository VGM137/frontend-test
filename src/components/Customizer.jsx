import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { setAmount, setRate } from '../actions'
import '../assets/styles/Components/Customizer.scss'

const Customizer = ({min, max, step, label, value, id}) => {

  const dispatch = useDispatch()


  const handleChange = (e) => {
    if(id == 'monto'){
      dispatch(setAmount(e.target.value))
      console.log(e)
    }else if(id == 'tasa'){
      dispatch(setRate(e.target.value))
    }
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-10 col-md-8 customizer justify-content-center'>
        <label htmlFor="customRange1" className="col-12 form-label justify-content-end">{label}</label>
        <input 
          type="range" 
          className="form-range" 
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