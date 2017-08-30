import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeValue } from './fieldActions';
 
class Field extends Component {

    render() {
        return (
        <div>
            <h1>{this.props.value}</h1>
            <input onChange={this.props.changeValue} value={this.props.value} />
        {console.log(this.props)}
        </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch) 
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Field);