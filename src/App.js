import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './shared/config/routes';

// Lazy load de cada sitio completo
const PortfolioSite = lazy(() => import('./sites/portfolio'));
const EbooksSite = lazy(() => import('./sites/ebooks'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-600 to-blue-600"><div className="text-white text-2xl">Cargando...</div></div>}>
        <Routes>
          <Route path={ROUTES.PORTFOLIO} element={<PortfolioSite />} />
          <Route path={ROUTES.EBOOKS} element={<EbooksSite />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
