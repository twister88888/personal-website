import React from 'react';

const Section = (props) => {
  return (
    <section id={props.name} className="clearfix">
        {props.children}
    </section>
  )
}

export default Section;
