import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/Components/QuoterValues.scss'

const QuoterValues = ({value, concept}) => {
  return (
    <div className='row qv-container'>
        <h2 className={'col-7 justify-content-end qv-concept'}>{concept}</h2>
        <div className={'col-4 justify-content-center qv-value'} >{value}</div>
    </div>
  )
}

export default connect(null, null)(QuoterValues)