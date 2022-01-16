import React from 'react'
import { connect } from 'react-redux'
import Text from './Text'
import Customizer from './Customizer'
import MonthTerm from './MonthTerm'
import QuoterValues from './QuoterValues'
import Btn from './Btn'
import '../assets/styles/Components/Quoter.scss'

const Quoter = (props) => {

const amount = parseInt(props.amountCustomizer)
const rateCustomizer = parseInt(props.rateCustomizer)
const rate = (rateCustomizer/100)*amount
const monthTerm = parseInt(props.monthTerm)


const monthCharge = ((amount/monthTerm)+((rate)/monthTerm)).toFixed(2)
const openCharge = 348.00
const deposit = amount-openCharge
const totalPay = amount+openCharge+rate
const cat = 15.71
/* console.log(typeof amount)
console.log(rateCustomizer)
console.log(rate.toFixed(2))
console.log(monthTerm)
console.log(monthCharge)
console.log(typeof openCharge)
console.log(typeof rate) */

  return (
    <div className='row quoter-container'>
      <div className='col col-sm-7 col-md-6 quoter'>
        <Text 
          cN={`quot`}
          col={'col'} 
          pCol={'col-10'}
          pColMd={'col-md-7'}
          pColLg={'col-lg-5'}
          height={'20%'}
          type={'pricing'}
          title1={'SIMULADOR DE CRÉDITO'}>
        </Text>
        <hr className='col-2 justify-content-center mt-3 mb-3 m-auto' style={{opacity: '1'}}/>
        <Customizer 
          min={'10000'}
          max={'1000000'}
          step={'1000'}
          label={'Monto deseado'}
          value={amount}
          id={'monto'}
        />
        <Customizer 
          min={'8.9'}
          max={'30'}
          step={'.1'}
          label={'Tasa anual'}
          value={rateCustomizer}
          id={'tasa'}
        />
        <hr className='col-11 justify-content-center mt-3 mb-3 m-auto'/>
        <MonthTerm />
        <hr className='col-11 justify-content-center mt-3 mb-3 m-auto'/>
        <div className='row'>
          <QuoterValues
            concept={'Pago mensual'}
            value={`$${monthCharge}`}
          />
          <QuoterValues
            concept={'Comisión de apertura'}
            value={`$${openCharge.toFixed(2)}`}
          />
          <QuoterValues
            concept={'Monto neto Depositado'}
            value={`$${deposit}`}
          />
          <QuoterValues
            concept={'Total pagado'}
            value={`$${totalPay}`}
          />
          <QuoterValues
            concept={'CAT'}
            value={`${cat}%`}
          />
        </div> 
        <Btn 
          id={'quoter'} 
          cN={'quot purple-solid-btn'}  
          name={'SOLICITAR MI CRÉDITO'}
          href={'/'} 
        /> 
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    amountCustomizer: state.amountCustomizer,
    rateCustomizer: state.rateCustomizer,
    monthTerm: state.monthTerm.term,
  }
}

export default connect(mapStateToProps, null)(Quoter)