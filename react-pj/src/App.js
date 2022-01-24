// App.js
// 220118
import React from 'react'
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import RouterPage from './Router/RouterPage';
import Footer from './components/Footer';

import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />
        <RouterPage />
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
