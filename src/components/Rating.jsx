import React from 'react';

const Rating = props => {
  return (
    <li>{props.name}<span className={props.value}></span></li>
  )
}
export default Rating;
