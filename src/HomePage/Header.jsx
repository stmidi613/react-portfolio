import React from 'react';
import './Header.css';
import '../index.css';

function Header() {
  return (
    <>
      <header id="background-animation" className='bg-lightblue h-48'>
          <h1 id="name-animation" className='sm:flex w-fit wrap relative text-lightblue text-3xl sm:text-5xl'>Stephen Dilks</h1>
          <h2 id="text-animation" className='allura text-lightblue text-center relative text-2xl sm:text-4xl'>Front End Web Developer in Japan!</h2>
      </header>
    </>
      )
}

export default Header;
