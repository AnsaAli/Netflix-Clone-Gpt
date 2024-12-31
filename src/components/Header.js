import React from 'react';
import netFlixLogo from '../images/Netflix_Logo_PMS.png'

const Header = () => {
  return (
    <div className='absolute px-10 py-10 bg-gradient-to-b from-black w-full' >
        <img src={netFlixLogo} alt='netflixLogo' className='w-44 '/>
    </div>
  )
}

export default Header