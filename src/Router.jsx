import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

// Import Pages
import Home from './pages/Home/home';
import About from './pages/About/about';
import Error from './pages/Error/Error';
import Location from './pages/Location/location';

// Import Style
import "./style.css";

// Import Components
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

// import locationDatas from './Data/logements.json';

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
          <Route path="location/:id" element={<Location />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;