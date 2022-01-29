import React from 'react';
import './Header.css';
import '../index.css';

function Header() {
  return (
  <div id="background-animation" className='bg-lightblue h-48'>
      <p id="name-animation" className='sm:flex wrap relative text-lightblue text-3xl sm:text-5xl'>Stephen Dilks</p>
      <p id="text-animation" className='allura text-lightblue text-center relative text-2xl sm:text-4xl'>Front End Web Developer in Japan!</p>
  </div>
  )
}

export default Header;
