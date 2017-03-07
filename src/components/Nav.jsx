import React from 'react';

const Nav = props => {
  return (
    <nav id="mainNav">
      <ul className="tabs clearfix">
        <li><a className="tab-about" href="#about">Sobre</a></li>
        <li><a className="tab-portfolio" href="#portfolio">Portfolio</a></li>
        <li><a className="tab-contact"  href="#contact">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Nav;
