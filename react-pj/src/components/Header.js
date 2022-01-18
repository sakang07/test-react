// Header.js 
// 220118
import React, { useEffect, useState } from 'react';
import {NavLink, Link} from 'react-router-dom';
import axios from 'axios';

import logo from '../img/img01.jpg'; // import는 src기준

function Header() {
  const imgStyle = {width: '100px', height: 'auto'};
  const [image, setImage] = useState({});

  useEffect(() => {
    axios.get('./data/img.json')
      .then(res => setImage(
        {backgroundImage:`url(${res.data[0].img})`}
        ) 
      )
  }, [image])

  return (
    <header id='headBox' style={image}>
      <h1><Link to="/"><img src={logo} alt='사이트 이름' style={imgStyle}/></Link></h1>
      <nav className='gnb'>
        {/* 함수(컴포넌트) 내부에서 img를 가져오려면 public 기준 */}
        <NavLink to='/'><img src='/asset/img01.jpg' alt='home' style={imgStyle}/></NavLink> {'  |  '}
        <NavLink to='about'><span style={{
          display: 'inline-block', width: '100px', height: 'auto', border: '1px solid #777',
          backgroundImage: 'url("/asset/img01.jpg")',
          backgroundSize: 'contain'
          }}>about</span></NavLink>
      </nav>
    </header>
  )
}

export default Header
