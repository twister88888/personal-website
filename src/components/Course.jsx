import React from 'react';

const Course = props => {
  return (
    <div className='about__course'>
      <h4>{props.name}</h4>
      <h6>{props.date}</h6>
    </div>
  )
}

export default Course;
