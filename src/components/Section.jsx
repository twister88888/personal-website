import React from 'react';
/*Eliminar el id*/
const Section = (props) => {
  return (
    <section id={props.name} className={props.name + ' clearfix'}>
        {props.children}
    </section>
  )
}

export default Section;
