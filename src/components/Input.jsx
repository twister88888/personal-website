import React from 'react';

const Input = props => {
  return (
    <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} className='input-text required' />
  )
}

export default Input;
