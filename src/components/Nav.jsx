import React from 'react';
/*Quitar id*/
const Nav = props => {
  return (
    <nav className='appbar js-appbar' role='navigation' id='mainNav'>
      <ul className='appbar__tabs tabs clearfix'>
        <li><a className='appbar__link appbar__link--about tab-about' href='#about'>Sobre</a></li>
        <li><a className='appbar__link appbar__link--portfolio tab-portfolio' href='#portfolio'>Portfolio</a></li>
        <li><a className='appbar__link appbar__link--contact tab-contact'  href='#contact'>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Nav;
