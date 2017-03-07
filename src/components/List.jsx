import React from 'react';

const Lista = props => {
    /*<a href='https://es.linkedin.com/in/juanmaor" target='_blank' title='Linkedin'
    <a href='skype:twister88888?call'>twister88888</a>
    <a href='mailto:info@jmprogramadorweb.es'>info@jmprogramadorweb.es</a>*/
    return (
      <li><span>{props.label}</span> : <span>{props.value}</span></li>
    )
}

export default Lista;
