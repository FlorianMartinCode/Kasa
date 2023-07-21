import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import Pages
import App from './pages/Home/home';

// Import Style
import "./style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: "/logement",
    element: <h1>Nos logements</h1>,
  },
  {
    path: "/about",
    element: <h1>A propos</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);