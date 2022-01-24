// HomeCon.js
// 220118
import React, { useState } from 'react'

function HomeCon() {

  const conStyle = {
    width: '80%', height: '400px', margin: '1rem auto', color: '#fff',
    backgoundColor: '#aaa'
  }

  const [myStyle, setMyStyle] = useState({...conStyle});
  const [pName, setPName] = useState('ticket');

  const fnStyle = e => {
    e.preventDefault();
    const mySet = (myStyle.color === conStyle.color) ? {...conStyle, backgroundColor: '#fa0', color: '#555'} : {...conStyle};
    setMyStyle(mySet);

    setPName( (pName === 'ticket') ? pName + ' on' : 'ticket');
  };

  return (
    <article id='conBox'>
      <h3>본문영역</h3>
      <button type='button' onClick={fnStyle}>버튼 클릭</button>
        <div className='con_area' style={myStyle}>
          <p className={pName}>conBox</p>
        </div>
      </article>
  )
}

export default HomeCon
