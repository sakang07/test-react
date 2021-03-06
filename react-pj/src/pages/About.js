// About.js
// 220118
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

import '../style/About.scss';

function About() {
  const mockData = './data/MOCK_DATA.json';
  const [cardList, setCardList] = useState([]);
  const nav = useNavigate();
  const {linkTo} = useParams();

  useEffect(() => {
    (async () => {
      const rel = await axios.get(mockData);
      setCardList(rel.data);
    })();
  }, []);

  useEffect(() => {
    console.log(linkTo);
  }, [linkTo])

  const filterData = cardList.filter((card, idx) => idx <= 20);

  return (
    <div className='page_wrap'>
      <h2>About Page</h2>

      <ul className='card_wrap'>
        {filterData.map((card, idx) => 
          <li key={idx}>
            {card.first_name + ' ' + card.last_name}
            <div className='link_btn'>
              {/* <Link to={card.first_name} onClick={e => {
                e.preventDefault();
                navigator(card.first_name)
                
              }}>{card.first_name}</Link> */}
              <button type='button' onClick={() => {
                nav(card.first_name)
              }}>{card.first_name}</button>
            </div>
          </li>
        )}
      </ul>
      <Outlet />

    </div>
  )
}

export default About

// 상세페이지/디테일페이지로 처리되는 경우
// react-router-dom을 이용하여 처리시
// <Route><Route path=":임의변수" /></Route>
// 선택 Route 컴포넌트 내부에 Route 컴포넌트를 사용
// :을 붙인 임의 변수명을 사용
// 이와 연동하기 위해 실제 사용하는 곳에서 useParams를 이용하여 해당 임의변수ㅗ명을 견결ㅞㅡ
// const {임의변수} = useParams();
// 반드시 Route에 있는 임의변수명과 동일한 변수명 사용
// Link 또는 NavLink를 이용하면 to 연결속성을,
// button 요소를 사용하면 useNavigate를 이용해서 연결
// useNavigate는 const nav = useNavigate(;
// onClick={() => { nav(연결할 값) } }
// Route와 연동되는 영역은 <Outlet />이 할당된 위치에서 처리

// useParams : 상세페이지의 data를 인식하여 그에 따른 값을 전달(연결)
// useNavigation : 강제 페이지 이동(location = 'page')
// Outlet : 원하는 페이지 내용이 표시되는 위치

