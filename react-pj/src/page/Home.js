// Home.js 
// 220118
import React, { Fragment } from 'react';
import HomeView from './home/HomeView';
import HomeCon from './home/HomeCon';
import HomeNews from './home/HomeNews';

function Home() {
  return (
    <Fragment>
      <HomeView />
      <HomeCon />
      <HomeNews />
    </Fragment>
  )
}

export default Home
