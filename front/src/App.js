import './App.css';
import React,{useState} from 'react';
// import axios from 'axios';
import {Header, Nav, Map, Footer, Division, Login, Search, Join, Friend, MypageUi } from './components/main';

function App() {
  let article = null;
  const [mode, setMode] = useState("map-btn");

  if(mode === "map-btn" || mode === "logout"){
    article = <Map/>
  }else if(mode === "calculator"){
    article = <Division/>
  }else if(mode === "login"){
    article = <Login onChange={(id) =>{
      setMode(id);
    }}/>
  }else if(mode === "join"){
    article = <Join/>
  }else if(mode === "search_id" || mode === "search_go_id"){
    article = <><Login/><Search searchId={mode} onChange={(id)=>{
      setMode(id);
    }}/></>
  }else if(mode === "search_pw" || mode === "search_go_pw"){
    article = <><Login/><Search searchId={mode} onChange={(id)=>{
      setMode(id);
    }}/></>
  }else if(mode === "myPage"){
    article = <MypageUi/>
  }else if(mode === "myPage_history"){
    article = <MypageUi/>
  }

  let friend = <Friend/>

  console.log(mode);
  return (
    <div className="App">
      <Header onChange={(className)=>{
        setMode(className);
      }}/>
      <Nav onChange={(className)=>{
        setMode(className);
      }}/>
      {article}
      {friend}
      <Footer />
    </div>
  );
}

export default App;