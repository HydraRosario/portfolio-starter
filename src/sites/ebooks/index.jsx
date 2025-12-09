import React from 'react';

const EbooksPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white'>
            <div className='container mx-auto px-4 py-16'>
                <h1 className='text-5xl font-bold text-center mb-8'>
                    Ebooks de HHHESTUDIOS
                </h1>
                <p className='text-xl text-center mb-12 max-w-2xl mx-auto'>
                    Descubre nuestra colección de ebooks sobre producción musical, desarrollo web e inteligencia artificial.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {/* Aquí irán los ebooks */}
                    <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all'>
                        <h3 className='text-2xl font-bold mb-4'>Próximamente</h3>
                        <p className='text-gray-300'>Estamos preparando contenido increíble para ti.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EbooksPage;
