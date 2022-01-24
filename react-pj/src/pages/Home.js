// Home.js 
// 220118
import React, { Fragment } from 'react';
import HomeView from './home/HomeView';
import HomeCon from './home/HomeCon';
import HomeNews from './home/HomeNews';

function Home() {
  return (
    <Fragment>
      <div className='page_wrap'>
        <h2>Home</h2>
        <HomeView />
        <HomeCon />
        <HomeNews />
      </div>
    </Fragment>
  )
}

export default Home
