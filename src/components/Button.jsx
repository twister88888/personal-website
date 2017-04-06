import React from 'react';

const Button = props => {
    return (
      <input type='submit' name='submit' id='submit' className='input-submit' value={props.value} />
    )
}

export default Button;
