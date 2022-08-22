import React,{useState} from 'react';
import '../css/header.css';
import Logo from '../data/newLogo.png'

export default function Header(props) {
  let login = null;
  const [loginState,setLoginState] = useState("logined");

  if(loginState === "unlogin"){
    login = <a href='/' className="login" onClick={(event)=>{
    event.preventDefault();
    props.onChange("login");
  }}>로그인</a>
  } else if(loginState === "logined"){
    login = <><a href='/' id='my-page' className="login" onClick={(event)=>{
      event.preventDefault();
      props.onChange("my-page");
    }}>마이페이지</a>
    <a href='/' id='logout' className="login" onClick={(event)=>{
      event.preventDefault();
      setLoginState("unlogin");
      props.onChange("index");
    }}>로그아웃</a></>
  }

  return <header className="header">
    <a href='/'><img src={Logo} className="logo" alt='logo' onClick={(event)=>{
      event.preventDefault();
      props.onChange("index");
      }}/></a>
    {login}
  </header>
}