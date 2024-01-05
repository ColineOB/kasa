import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import APropos from './pages/APropos/aPropos'
import Error from './pages/Error/error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//fonts
import "./assets/fonts/Montserrat-VariableFont_wght.ttf"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='body-margin'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aPropos' element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
      <Footer />
    </Router>

  </React.StrictMode>
);
