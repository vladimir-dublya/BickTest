import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './pages/App';
import { Register } from './pages/Register';
import { Obj } from './types/Obj';


export const Navigation = () => {
  const [dataPes, setDataPes] = useState<Obj[]>([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App dataPes={dataPes} setDataPes={setDataPes} />}
        />
        <Route
          path='/register'
          element={<Register dataPes={dataPes} setDataPes={setDataPes} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
