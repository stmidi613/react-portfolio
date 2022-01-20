import React from 'react';
import './Header.css';

function Header() {
  return (
  <div id="background-animation" className='bg-darkblue h-96'>
      <p id="name-animation" className='flex wrap w-1/2 relative text-lightblue text-4xl sm:text-5xl'>Stephen Dilks</p>
      <p id="text-animation" className='text-lightblue text-center relative text-4xl'>Thank you for visiting my website!</p>
  </div>
  )
}

export default Header;
