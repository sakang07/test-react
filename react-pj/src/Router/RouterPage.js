// routerPage.js
// 220118
import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../page/Home'
import About from '../page/About';
import PageError from '../page/PageError';

function routerPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/*" element={<PageError />} />
    </Routes>
  )
}

export default routerPage
