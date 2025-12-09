import React from 'react';
import { Link } from 'react-router-dom';

const EbooksPage = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden min-h-screen'>
            <div className='container mx-auto px-4 py-20'>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                    <h1 className='text-5xl lg:text-7xl font-bold text-white mb-6 text-center'>
                        Ebooks Business
                    </h1>
                    <p className='text-xl lg:text-2xl text-white/80 mb-8 text-center max-w-2xl'>
                        Welcome to the ebooks section. This is where your digital products and business content will be displayed.
                    </p>
                    <Link
                        to='/'
                        className='btn btn-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300'
                    >
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EbooksPage;
