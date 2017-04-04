import React from 'react';

const Nav = props => {
  return (
    <nav className='appbar js-appbar' role='navigation'>
      <ul className='appbar__tabs tabs clearfix'>
        <li><a className='appbar__link appbar__link--about' href='#about'>Sobre</a></li>
        <li><a className='appbar__link appbar__link--portfolio' href='#portfolio'>Portfolio</a></li>
        <li><a className='appbar__link appbar__link--contact'  href='#contact'>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Nav;
