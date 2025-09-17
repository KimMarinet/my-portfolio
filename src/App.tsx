import './App.css';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route} from 'react-router-dom'
import ProtfolioPage from './portfolio/pages/ProtfolioPage';
import MainLayout from './global/layouts/MainLayout';
import MainPage from './main/pages/MainPage';
import NotFoundPage from './global/pages/NotFoundPage';

const App = () => {
  return(
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />}></Route>
              <Route path="port" element={<ProtfolioPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </HelmetProvider>
    </>
  )
}

export default React.memo(App);
