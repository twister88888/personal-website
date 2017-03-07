import React from 'react';

const Logo = () => {
  return (
    <figure className='logo' id='img'>
      <span className='logo__image' itemProp='photo'>
        <img src='images/programador-web-sevilla.jpg' alt='programador web sevilla' width='218' />
      </span>
      <div className='logo__info'>
        <h1 className='logo__name'><span itemProp='name'>Juanma Ortiz</span></h1>
        <h2 className='logo__role'><span>Programador web</span></h2>
      </div>
    </figure>
  )
}

export default Logo;
