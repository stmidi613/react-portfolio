import React from 'react';
import './Header.css';

function Header() {
  return (
  <div id="background-animation" className='bg-lightblue h-48'>
      <p id="name-animation" className='flex wrap w-1/2 relative text-lightblue text-3xl sm:text-5xl'>Stephen Dilks</p>
      <p id="text-animation" className='text-lightblue text-center relative text-xl sm:text-4xl'>Front End Web Developer in Japan!</p>
  </div>
  )
}

export default Header;
