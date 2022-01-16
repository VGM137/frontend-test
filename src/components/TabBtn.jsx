import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { setApiActiveBtn, setPricingActiveBtn } from '../actions'
import '../assets/styles/Components/TabBtns.scss'

const TabBtn = ({verify, cN, func, payload, name, bootstrap}) => {

  console.log(verify)

  const jsIsActive = useSelector(state => state.apiActiveBtn.js)
  const cssIsActive = useSelector(state => state.apiActiveBtn.css)
  const securityIsActive = useSelector(state => state.apiActiveBtn.security)

  const dispatch = useDispatch()

  const handleClick = (payload, cN) => {
    if(cN == 'apiBtn' ){
      dispatch(setApiActiveBtn(payload))
    }
    if(cN == 'pricingBtn' ){
      dispatch(setPricingActiveBtn(payload))
    }
  }

  return (
    <button 
      className={verify ? `${cN} ${bootstrap} tab-btn active` : `${cN} ${bootstrap} tab-btn`} 
      onClick={() => handleClick(payload, cN)}>{name}
    </button>
  )
}

const mapStateToProps = (state) => {
  return{
    apiActiveBtn: state.apiActiveBtn
  }
}

const dispatchStateToProps = {
  setApiActiveBtn,
  setPricingActiveBtn
}

export default connect(mapStateToProps, dispatchStateToProps)(TabBtn)