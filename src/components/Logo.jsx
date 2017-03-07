import React from 'react';

const Logo = () => {
  return (
    <figure id="img">
      <span itemProp="photo">
        <img src="images/programador-web-sevilla.jpg" alt="programador web sevilla" width="218" />
      </span>
      <div>
        <h1><span itemProp="name">Juanma Ortiz</span></h1>
        <h2><span>Programador web</span></h2>
      </div>
    </figure>
  )
}

export default Logo;
