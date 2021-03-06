import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='clearfix' role='banner'>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header;
