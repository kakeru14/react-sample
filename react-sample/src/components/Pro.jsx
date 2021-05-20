import React from 'react'
//import Input from './components/Inpit'
import {connect} from 'react-redux'
import {countPlus,countMinus} from '../actions'

class Pro extends React.Component {
    render(){
        const props = this.props
        return(
            <>
            <p>現在の数字は  {props.val}</p>
    <button onClick={props.countPlus}> +1 </button>
    <button onClick={props.countMinus}> -1 </button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    val: state.counter.val
})

const mapDispatchToProps = dispatch => ({
    countPlus:()=> dispatch(countPlus()),
    countMinus:()=> dispatch(countMinus())
})

//export default Todo;
export default connect (mapStateToProps,mapDispatchToProps)(Pro)