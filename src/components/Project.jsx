import React from 'react';

const Project  = props =>{
  return (
    <li data-id={props.id} data-type={props.type} className='item'>
      <a className='folio' href={'images/images'+props.path} title={props.name}>
        <span className='plus'></span>
      </a>
      <img src={'images/previa/'+props.path_preview} alt={props.name} width='225' height='130' />
      <span className='border'></span>
      <h3>{props.name}</h3>
    </li>
  )
}

export default Project;
