import React,{useState} from 'react';
import Exit from '../data/exit_btn.png';
import '../css/search.css';
import { NavLink } from 'react-router-dom';

export default function Search(props) {

  const getTestAccount = {Name : "홍길동", PhoneNumber : "010-1234-5678", Id : "testdata01", Pw : "testadmin3313"} // 임시 데이터

  // <div className="search-div-answer">
  //   <p className="search-answer">귀하의 아이디는 {getTestAccount.Id} 입니다. </p>
  // </div>

  return (
    <article className="search">
      <div className="search-box">
          <h2>아이디/비밀번호 찾기</h2>
          <NavLink to='/login'><img id='login' className="exit-btn" src={Exit} alt="exit"/></NavLink>
        <div className='search-other-menu'>
          <NavLink to='/login/search_id' id='search-go-id' className='search-other-id'>아이디 찾기</NavLink>
          <NavLink to='/login/search_pw' id='search-go-pw' className='search-other-pw'>비밀번호 찾기</NavLink>
        </div>
        <div className="search-div">
          <p>이름</p>
          <input className="search-input"></input>
          <p>휴대폰인증</p>
          <select className="search-contry" form="myForm">
            <option value="korea">
              대한민국 +82
            </option>
            <option value="amerixa">
              미국 +1
            </option>
          </select>
          <select className="search-telecom" form="myForm">
            <option value="SKT">
              SKT
            </option>
            <option value="KT">
              KT
            </option>
            <option value="LG">
              LG
            </option>
            <option value="알뜰폰">
              알뜰폰
            </option>
          </select>
          <input className="search-input-with-btn" placeholder="휴대폰번호 입력"></input>
          <button className="search-sms-btn">인증받기</button>
          <input className="search-input"></input>
          <input id="search-id-submit" className="search-submit-id" type="submit" value="아이디 찾기" onClick={event =>{
            event.preventDefault();
          }}></input>
        </div>
      </div>
    </article>
  )
}