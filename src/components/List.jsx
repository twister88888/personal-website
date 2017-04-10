import React from 'react';

const Lista = props => {
    return (
      <li><span>{props.label}</span> : {props.value}</li>
    )
}

export default Lista;
