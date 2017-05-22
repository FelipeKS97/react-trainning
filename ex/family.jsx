import React from 'react';


export default props => (
    <div>
        <h1> Teste </h1>
        { React.cloneElement(props.children, {...props})  } 
    </div>
) 