import { React } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Praticaum from './routes/praticaum';
import Praticadois from './routes/praticadois';
import Praticatres from './routes/praticatres';
import Elevandostate from './routes/elevandostate';
import Customhook from './routes/customhook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="praticaum" element={<Praticaum />} />
      <Route path="praticadois" element={<Praticadois />} />
      <Route path="praticatres" element={<Praticatres />} />
      <Route path="elevandostate" element={<Elevandostate />} />
      <Route path="customhook" element={<Customhook />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
