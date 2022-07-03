import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//
import { ROUTES } from './Constant/component';
import Header from './Pages/Header/component';
import Main from './Pages/Main/component';
import About from './Pages/AboutMe/component';
import Portfolio from './Pages/Portfolio/component';
import Footer from './Pages/Footer/component';

const App = () => {
  const [bgc, setBgc] = useState(true);

  const ref = useRef(null);
  const logoRef = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleLogoClick = () => {
    logoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className={bgc ? 'application' : 'application__blue'}>
        <Header
          bgc={bgc}
          setBgc={setBgc}
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
