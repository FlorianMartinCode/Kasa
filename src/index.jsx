import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Pages
import App from './pages/Home/home';

// Import Style
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);