import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Import Pages
import Home from './pages/Home/home';
import About from './pages/About/about';

// Import Style
import "./style.css"

// Import Layout
import Navbar from './layout/Navbar/navbar';
import Footer from './layout/Footer/footer';

const HeaderFooterLayout = () => {
  return <>
  <Navbar />
  <Outlet />
  <Footer />
  </>
};

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/logement",
      element: <h1>Logement</h1>
      },
      {
        path: '/about',
        element: <About />
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);