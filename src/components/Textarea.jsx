import React from 'react';

const Textarea = props => {
    return (
      <textarea id={props.name} name={props.name} cols='45' rows='10' placeholder={props.placeholder} className='required'></textarea>
    )
}

export default Textarea;
