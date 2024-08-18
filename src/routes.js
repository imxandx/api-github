import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;