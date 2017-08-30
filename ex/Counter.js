import React from 'react'
import {bindActionCreators} from 'redux'
import { actionCreators , connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'


const Counter = props => (
 
<div>
 
    <h1>{props.counter.number}</h1>
 
    <input 
        onChange={props.stepChanged}
        value={props.counter.step} 
        type='number' 
    />
 
    <button onClick={props.dec}>-</button>
 
    <button onClick={props.inc}>+</button>
 
</div>
)
const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators(
        { inc, dec, stepChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)