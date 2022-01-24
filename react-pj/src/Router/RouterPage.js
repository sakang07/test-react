// routerPage.js
// 220118
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About';
import AboutDetail from '../pages/about/AboutDetail';
import PageError from '../pages/PageError';

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path=":linkTo" element={<AboutDetail />} />
      </Route>
      <Route path="/*" element={<PageError />} />
    </Routes>
  )
}

export default RouterPage
