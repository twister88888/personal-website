import React from 'react';

const Textarea = props => {
    return (
      <textarea id={props.name} name={props.name} placeholder={props.placeholder} className='textarea required'></textarea>
    )
}

export default Textarea;
