import React from 'react';

//import icons//- 

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

//link

import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
          {/* home button in nav */}
          <Link 
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiHomeAlt />
          </Link>
          {/* about button in nav */}
          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-30}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiUser />
          </Link>
          {/* services button in nav */}
          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-30}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsClipboardData />
          </Link>
          {/* work button in nav */}
          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-30}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsBriefcase />
          </Link>
          {/* contact button in nav */}
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-30}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
