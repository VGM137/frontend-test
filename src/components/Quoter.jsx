import React from 'react'
import { connect } from 'react-redux'
import Text from './Text'
import Customizer from './Customizer'
import MonthTerm from './MonthTerm'
import '../assets/styles/Components/Quoter.scss'

const Quoter = (props) => {

const amountCustomizer = props.amountCustomizer
const rateCustomizer = props.rateCustomizer

  return (
    <div className='row quoter-container'>
      <div className='col col-sm-8 col-md-6 quoter'>
        <Text 
          cN={`quoter`}
          col={'col'} 
          pCol={'col-10'}
          pColMd={'col-md-7'}
          pColLg={'col-lg-5'}
          height={'20%'}
          type={'pricing'}
          title1={'SIMULADOR DE CRÉDITO'}>
        </Text>
        <Customizer 
          min={'10000'}
          max={'1000000'}
          step={'1000'}
          label={'Monto deseado'}
          value={amountCustomizer}
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
        <hr />
        <MonthTerm />
        <hr />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    amountCustomizer: state.amountCustomizer,
    rateCustomizer: state.rateCustomizer,
  }
}

export default connect(mapStateToProps, null)(Quoter)