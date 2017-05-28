import React,{Component} from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initialValue
        }
    }

    sum(alteracao) {
        this.setState( {value: this.state.value+alteracao} );
    }

    render() {
        return (
        <div>
            <h1>{this.props.label}</h1>
            <h2>{this.state.value}</h2>
            <button onClick={()=> this.sum(+1)}>+Incrementar</button>
            <button onClick={()=> this.sum(-1)}>-Decrementar</button>
        </div>
        );
    }
}