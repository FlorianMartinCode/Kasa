import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Pages
import App from './App';

// Import Style
import "./sass-styles/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);