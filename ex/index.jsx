import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    
        <Family nome="Membro">
            <Member numero="1" />
            <Member numero="2" />
            <Member numero="3" />
            <Member numero="4" />
        </Family>
   
    , document.getElementById('app'));