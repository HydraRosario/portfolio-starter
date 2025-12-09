import React from 'react';
//images
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* logo */}
                    <a href='https://www.instagram.com/hhhestudios' target='_blank' rel='noopener noreferrer'>
                        <img src={Logo} alt='' height='200px' width='200px' />
                    </a>
                    {/* button eliminado por solicitud del usuario */}
                </div>
            </div>
        </header>
    );
};

export default Header;
