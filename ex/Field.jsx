import React,{Component} from 'react';

export default class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initialValue
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState( {value: e.target.value} );
    }

    render() {
        return (
        <div>
            <h1>{this.state.value}</h1>
            <input onChange={this.handleChange} />
        </div>
        );
    }
}