import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import PortfolioLayout from './components/PortfolioLayout';
import EbooksPage from './components/EbooksPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PortfolioLayout />} />
        <Route path='/ebooks' element={<EbooksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
