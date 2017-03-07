import React from 'react';

const Position = props => {
  return (
    <div className='about__position'>
      <h4><span itemProp='role'>{props.name}</span> – <span itemProp='affiliation'>{props.afiliation}</span> </h4>
      <h6>{props.date}</h6>
    </div>
  )
}
export default Position;
