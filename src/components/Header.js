import React from 'react';
//images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='# '>
            <img src={Logo} alt='' height='200px' width='200px'/>
          </a>
          {/* button */}
          <button className='btn btn-sm'>
          <a href='https://www.linkedin.com/in/HydraRosario/'>
                  Work with me
                </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
