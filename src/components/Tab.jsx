import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import TabBtn from './TabBtn'

const Tab = ({section}) => {
  
  const dispatch = useDispatch()

  const jsIsActive = useSelector(state => state.apiActiveBtn.js)
  const cssIsActive = useSelector(state => state.apiActiveBtn.css)
  const securityIsActive = useSelector(state => state.apiActiveBtn.security)

  const montlyIsActive = useSelector(state => state.pricingActiveBtn.montly)
  const yearlyIsActive = useSelector(state => state.pricingActiveBtn.yearly)

  return (
    <>  
    {section == 'api' &&
      <div className='row'>
        <div className='col-10 justify-content-end' style={{margin: 'auto', display: 'flex', justifyContent: 'end'}}>
          <TabBtn bootstrap={'col-3'} cN={'apiBtn'} verify={jsIsActive} payload={'js'} name={'Initializing JS'}></TabBtn>
          <TabBtn bootstrap={'col-3'} cN={'apiBtn'} verify={cssIsActive} payload={'css'} name={'Configuration CSS'}></TabBtn>
          <TabBtn bootstrap={'col-3'} cN={'apiBtn'} verify={securityIsActive}  payload={'security'} name={'Security Levels API'}></TabBtn>
        </div>
      </div>
    }
    {section == 'pricing' &&
      <div className='row'>
        <div className='col-10 justify-content-center' style={{margin: 'auto', display: 'flex', justifyContent: 'center'}}>
          <TabBtn bootstrap={'col-4'} cN={'pricingBtn'} verify={montlyIsActive} payload={'montly'} name={'Montly'}></TabBtn>
          <TabBtn bootstrap={'col-4'} cN={'pricingBtn'} verify={yearlyIsActive} payload={'yearly'} name={'Yearly'}></TabBtn>
        </div>
      </div>
    }
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    activeBtn: state.activeBtn
  }
}

export default connect(mapStateToProps, null)(Tab)