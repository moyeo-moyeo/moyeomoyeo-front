import React,{useState} from 'react';
import Logo from '../data/Logo.png'

export default function Header(props) {
  let login = null;
  const [loginState,setLoginState] = useState("logined");

  if(loginState === "unlogin"){
    login = <a href='/' className="login" onClick={(event)=>{
    event.preventDefault();
    props.onChange(event.target.className);
  }}>로그인</a>
  } else if(loginState === "logined"){
    login = <><a href='/' id='myPage' className="login" onClick={(event)=>{
      event.preventDefault();
      props.onChange(event.target.id);
    }}>마이페이지</a>
    <a href='/' id='logout' className="login" onClick={(event)=>{
      event.preventDefault();
      setLoginState("unlogin");
      props.onChange(event.target.id);
    }}>로그아웃</a></>
  }

  return <header className="header">
    <a href='/' className="brand-name">모여모여</a>
    <a href='/'><img src={Logo} className="logo" alt='logo'/></a>
    {login}
  </header>
}