import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

// Import Pages
import Home from './pages/Home/home';
import About from './pages/About/about';
import Error from './pages/Error/Error';

// Import Style
import "./style.css";

// Import Components
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

const HeaderFooter = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index element={<Home />} />
          <Route path="logement" element={<h1>Logement</h1>} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
