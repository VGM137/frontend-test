import React from 'react'
import { connect } from 'react-redux'
import Text from './Text'
import Customizer from './Customizer'
import MonthTerm from './MonthTerm'
import QuoterValues from './QuoterValues'
import Btn from './Btn'
import '../assets/styles/Components/Quoter.scss'

const Quoter = (props) => {

const amount = props.amountCustomizer
const amountCurrency = () => {return new Intl.NumberFormat().format(amount)}
const rateCustomizer = parseFloat(props.rateCustomizer)
const rate = (rateCustomizer/100)*amount
const monthTerm = parseInt(props.monthTerm)

const amountBubble = props.bubbles.amountBubble
const rateBubble = props.bubbles.rangeBubble

const monthCharge = ((amount/monthTerm)+((rate)/monthTerm)).toFixed(2)
const mthChCurrency = () => {return new Intl.NumberFormat().format(monthCharge)}
const openCharge = 348.00
const deposite = amount-openCharge
const depositeCurrency = () => {return new Intl.NumberFormat().format(deposite)}
const totalPay = parseInt(amount)+openCharge+parseInt(rate)
const totalPayCurrency = () => {return new Intl.NumberFormat().format((totalPay))}
const cat = 15.71

  return (
    <div className='row quoter-container'>
      <div className='col-10 col-sm-8 col-md-6 col-lg-5  quoter'>
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
          currency={amountCurrency()}
          id={'monto'}
          bubble={amountBubble}
        />
        <Customizer 
          min={'8.9'}
          max={'30'}
          step={'.1'}
          label={'Tasa anual'}
          value={rateCustomizer}
          id={'tasa'}
          bubble={rateBubble}
        />
        <hr className='col-11 justify-content-center mt-3 mb-3 m-auto'/>
        <MonthTerm />
        <hr className='col-11 justify-content-center mt-3 mb-3 m-auto'/>
        <div className='row'>
          <QuoterValues
            concept={'Pago mensual'}
            value={`$${mthChCurrency()}`}
          />
          <QuoterValues
            concept={'Comisión de apertura'}
            value={`$${openCharge.toFixed(2)}`}
          />
          <QuoterValues
            concept={'Monto neto Depositado'}
            value={`$${depositeCurrency()}`}
          />
          <QuoterValues
            concept={'Total pagado'}
            value={`$${totalPayCurrency()}`}
          />
          <QuoterValues
            concept={'CAT'}
            value={`${cat}%`}
          />
        </div> 
        <Btn 
          bootsrap={'m-auto'}
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
    bubbles: state.bubbles
  }
}

export default connect(mapStateToProps, null)(Quoter)