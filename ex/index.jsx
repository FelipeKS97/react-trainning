import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classComponent'

ReactDOM.render(
   <ClassComponent initialValue={10} label='Contador de Teste' />
    , document.getElementById('app'));