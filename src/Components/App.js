import React from 'react';
import { Routes, Route } from 'react-router-dom';

//
import { ROUTES } from './Constant/component';
import Header from './Pages/Header/component';
import Main from './Pages/Main/component';
import About from './Pages/AboutMe/component';
import Portfolio from './Pages/Portfolio/component';
import Footer from './Pages/Footer/component';
import { useScrollRef } from './RefScroll/RefScroll';

const App = () => {
  const { ref, logoRef, handleClick, handleLogoClick } = useScrollRef();

  return (
    <>
      <div className="application">
        <Header
          scrolls={logoRef}
          handleClick={handleClick}
          handleLogoClick={handleLogoClick}
        />
        <Routes>
          <Route path={ROUTES.HOME} element={<Main />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
        </Routes>
      </div>
      <Footer scrolls={ref} handleLogoClick={handleLogoClick} />
    </>
  );
};

export default App;
