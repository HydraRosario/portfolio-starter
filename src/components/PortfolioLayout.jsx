import React from 'react';
// components
import Banner from './Banner';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';

const PortfolioLayout = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <Banner />
            <Nav />
            <About />
            <Services />
            <Work />
            <Contact />
        </div>
    );
};

export default PortfolioLayout;
