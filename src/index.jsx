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
import Error from './pages/Error/Error'

// Import Style
import "./style.css"

// Import Components
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

const HeaderFooter = () => {
  return <>
  <Navbar />
  <Outlet />
  <Footer />
  </>
};

const router = createBrowserRouter([
  {
    element: <HeaderFooter />,
    // errorElement: <Error />,
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
      },
      {
        path: '*',
        element: <Error />
      },
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