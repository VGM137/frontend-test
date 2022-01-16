import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { setMonthTerm } from '../actions'
import '../assets/styles/Components/MonthTerm.scss'

const MonthTerm = () => {
  
  const dispatch = useDispatch()

  const firstIsActive = useSelector(state => state.monthTerm.first)
  const secondIsActive = useSelector(state => state.monthTerm.second)
  const thirdIsActive = useSelector(state => state.monthTerm.third)

  const handleClick = (payload) => {
    dispatch(setMonthTerm(payload))
  }

  return (
    <div className='row'>
      <div className='col monthTitle justify-content-center'>
        Plazo en meses
      </div>
      <div className='row'>
        <div className='col-10 justify-content-around' style={{margin: '15px auto', display: 'flex', justifyContent: 'end'}}>
          <button 
            className={`${firstIsActive ? 'activeMonth monthBtn col-3' : 'monthBtn col-3'}`} 
            onClick={() => handleClick('first')}>12</button>
          <button 
            className={`${secondIsActive ? 'activeMonth monthBtn col-3' : 'monthBtn col-3'}`} 
            onClick={() => handleClick('second')}>24</button>
          <button 
            className={`${thirdIsActive ? 'activeMonth monthBtn col-3' : 'monthBtn col-3'}`} 
            onClick={() => handleClick('third')}>36</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    monthTerm: state.monthTerm
  }
}

const dispatchStateToProps = {
  setMonthTerm
}

export default connect(mapStateToProps, dispatchStateToProps)(MonthTerm)