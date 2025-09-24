import React, { useState, useEffect } from 'react';
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
  const [zoomed, setZoomed] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [startPointer, setStartPointer] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [dynamicZoom, setDynamicZoom] = useState(1.05);

  const openPopup = (index) => {
    setPopupIndex(index);
    setZoomed(true);
    setTranslate({ x: 0, y: 0 });
    setDynamicZoom(1.05);
  };
  const closePopup = () => {
    setPopupIndex(null);
    setZoomed(false);
  };
  const nextPopup = () => {
    setPopupIndex((popupIndex + 1) % catalogos.length);
    setZoomed(true);
  };
  const prevPopup = () => {
    setPopupIndex((popupIndex - 1 + catalogos.length) % catalogos.length);
    setZoomed(true);
  };

  // Ensure zoom/translate reset when popupIndex changes
  useEffect(() => {
    setZoomed(true);
    setTranslate({ x: 0, y: 0 });
    setIsPanning(false);
    setDynamicZoom(1.05);
  }, [popupIndex]);

  useEffect(() => {
    if (popupIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [popupIndex]);

  // Handlers for pointer-based panning when zoomed
  const onPointerDown = (e) => {
    if (!zoomed) return;
    e.preventDefault();
    setIsPanning(true);
    setStartPointer({ x: e.clientX - translate.x, y: e.clientY - translate.y });
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
  };

  const onPointerMove = (e) => {
    if (!isPanning) return;
    e.preventDefault();
    const nx = e.clientX - startPointer.x;
    const ny = e.clientY - startPointer.y;
    setTranslate({ x: nx, y: ny });
  };

  const endPan = (e) => {
    if (!isPanning) return;
    setIsPanning(false);
    try { e.currentTarget.releasePointerCapture && e.currentTarget.releasePointerCapture(e.pointerId); } catch (err) {}
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    const newZoom = dynamicZoom + (e.deltaY > 0 ? -zoomFactor : zoomFactor);
    setDynamicZoom(Math.max(0.5, Math.min(newZoom, 3)));
  };

  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center mt-4 mb-6'>
          <h2 className='h2 text-gradient text-center mb-2' style={{background: 'linear-gradient(90deg, #ff0000, #0044ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Catálogo
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8' style={{minHeight: 'auto'}}>
          <div className='flex flex-col items-center cursor-pointer flex-1'>
            <img
              src={catalogos[1].src}
              alt={catalogos[1].alt}
              className={`rounded-xl w-[200px] h-[340px] object-cover mb-4 shadow-lg border-4 ${catalogos[1].border} transition-transform hover:scale-105`}
              onClick={() => openPopup(1)}
            />
            <span className='text-sm text-white'>{catalogos[1].alt}</span>
          </div>
          <div className='flex items-center justify-center w-full lg:w-auto'>
            <div className='w-full lg:w-3 lg:h-[280px] h-3 rounded-md' style={{background: 'linear-gradient(90deg, #ff0000 0%, #0044ff 100%)', boxShadow: '0 0 8px #ff0000, 0 0 8px #0044ff'}}></div>
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
        <div className='flex justify-center mt-12 lg:-mt-8'>
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
          <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50' onClick={closePopup}>
            <div className='relative flex flex-col items-center' onClick={(e) => e.stopPropagation()}>
              <button
                className='absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80'
                onClick={closePopup}
                aria-label='Cerrar'
                style={{ zIndex: 100 }}
              >
                ×
              </button>
                {/* Zoom enabled by default on open; no button needed */}
              <button
                className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-2 py-1 hover:bg-opacity-80'
                onClick={prevPopup}
                aria-label='Anterior'
                style={{ zIndex: 100 }}
              >
                ‹
              </button>
                <div
                  className='overflow-hidden rounded-xl'
                  style={{maxWidth: '90vw', maxHeight: '80vh', touchAction: zoomed ? 'none' : 'auto', cursor: zoomed ? (isPanning ? 'grabbing' : 'grab') : 'auto'}}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={endPan}
                  onPointerCancel={endPan}
                  onWheel={handleWheel}
                >
                  <img
                    src={catalogos[popupIndex].src}
                    alt={catalogos[popupIndex].alt}
                    className={`block shadow-2xl border-8 ${catalogos[popupIndex].border}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      transform: `translate(${translate.x}px, ${translate.y}px) scale(${dynamicZoom})`,
                      transition: isPanning ? 'none' : 'transform 300ms ease',
                      touchAction: zoomed ? 'none' : 'auto',
                    }}
                    draggable={false}
                  />
                </div>
              <button
                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-2 py-1 hover:bg-opacity-80'
                onClick={nextPopup}
                aria-label='Siguiente'
                style={{ zIndex: 100 }}
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
