import React, { useState } from 'react';
import catalogoMusical from '../assets/catalogo-musical.jpg';
import catalogoWeb from '../assets/catalogo-web.jpg';
import catalogoExtra from '../assets/292cdd2b-2f42-442f-ab5e-d5688bb7ebda.jpeg';

const catalogos = [
  { src: catalogoWeb, alt: 'Catálogo Web', border: 'border-blue-500' },
  { src: catalogoMusical, alt: 'Catálogo Musical', border: 'border-red-500' },
  { src: catalogoExtra, alt: 'Extras Opcionales', border: 'border-purple-500' },
];

const Services = () => {
  const [popupIndex, setPopupIndex] = useState(null);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);
  const nextPopup = () => setPopupIndex((popupIndex + 1) % catalogos.length);
  const prevPopup = () => setPopupIndex((popupIndex - 1 + catalogos.length) % catalogos.length);

  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center mt-[-40px] mb-2'>
          <h2 className='h2 text-gradient text-center mb-2' style={{background: 'linear-gradient(90deg, #ff0000, #0044ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '-40px'}}>
            Catálogo
          </h2>
        </div>
        <div className='flex flex-row items-center justify-center gap-8' style={{minHeight: '340px'}}>
          <div className='flex flex-col items-center cursor-pointer flex-1'>
            <img
              src={catalogos[1].src}
              alt={catalogos[1].alt}
              className={`rounded-xl w-[200px] h-[340px] object-cover mb-4 shadow-lg border-4 ${catalogos[1].border} transition-transform hover:scale-105`}
              onClick={() => openPopup(1)}
            />
            <span className='text-sm text-white'>{catalogos[1].alt}</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div style={{width: '3px', height: '340px', borderRadius: '6px', background: 'linear-gradient(180deg, #ff0000 0%, #0044ff 100%)', boxShadow: '0 0 8px #ff0000, 0 0 8px #0044ff'}}></div>
          </div>
          <div className='flex flex-col items-center cursor-pointer flex-1'>
            <img
              src={catalogos[0].src}
              alt={catalogos[0].alt}
              className={`rounded-xl w-[200px] h-[340px] object-cover mb-4 shadow-lg border-4 ${catalogos[0].border} transition-transform hover:scale-105`}
              onClick={() => openPopup(0)}
            />
            <span className='text-sm text-white'>{catalogos[0].alt}</span>
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <div className='flex flex-col items-center'>
            <img
              src={catalogos[2].src}
              alt={catalogos[2].alt}
              className={`rounded-xl w-[120px] h-[120px] object-cover mb-2 shadow-lg border-4 ${catalogos[2].border} transition-transform hover:scale-105`}
              onClick={() => openPopup(2)}
            />
            <span className='text-sm text-white'>{catalogos[2].alt}</span>
          </div>
        </div>

        {/* Pop-up */}
        {popupIndex !== null && (
          <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
            <div className='relative flex flex-col items-center'>
              <button
                className='absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80'
                onClick={closePopup}
                aria-label='Cerrar'
              >
                ×
              </button>
              <button
                className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-2 py-1 hover:bg-opacity-80'
                onClick={prevPopup}
                aria-label='Anterior'
              >
                ‹
              </button>
              <img
                src={catalogos[popupIndex].src}
                alt={catalogos[popupIndex].alt}
                className={`rounded-xl max-w-[90vw] max-h-[80vh] shadow-2xl border-8 ${catalogos[popupIndex].border}`}
              />
              <button
                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-2 py-1 hover:bg-opacity-80'
                onClick={nextPopup}
                aria-label='Siguiente'
              >
                ›
              </button>
              <span className='mt-4 text-lg text-white'>{catalogos[popupIndex].alt}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
