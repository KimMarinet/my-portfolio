import './App.css';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Routes, Route} from 'react-router-dom'
import ProtfolioPage from './portfolio/pages/ProtfolioPage';
import MainLayout from './global/layouts/MainLayout';
import MainPage from './main/pages/MainPage';
import NotFoundPage from './global/pages/NotFoundPage';

const App = () => {
  return(
    <>
      <HelmetProvider>
      <HashRouter>
        <Routes>

            <Route path='/' element={<MainPage />}></Route>

            <Route path="port" element={<ProtfolioPage />}></Route>

            <Route path="*" element={<NotFoundPage />}></Route>

        </Routes>
      </HashRouter>
      </HelmetProvider>
    </>
  )
}

export default React.memo(App);
