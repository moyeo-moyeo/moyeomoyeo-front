import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import '../css/header.css'
import Logo from '../data/newLogo.png'

export default function Header(props) {
  let login = null;

  if(props.loginState === "logout"){
    login = <NavLink to='/login' className="login">로그인</NavLink>
  } else if(props.loginState === "logined"){
    login = <><NavLink to='/mypage' id='my-page' className="login">마이페이지</NavLink>
    <a href='/' id='logout' className="login" onClick={(event)=>{
      event.preventDefault();
      props.setLoginState("logout");
    }}>로그아웃</a></>
  }

  return (
  <header className="header">
    <NavLink to='/'><img src={Logo} className="logo" alt='logo' /></NavLink>
    {login}
  </header>
  );
}