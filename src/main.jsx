import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import NonVeg from './components/NonVeg.jsx';
import Veg from './components/Veg.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; 
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/nonveg" element={<NonVeg />} />
      <Route path="/veg" element={<Veg />} />
    </Routes>
  </BrowserRouter>
)
