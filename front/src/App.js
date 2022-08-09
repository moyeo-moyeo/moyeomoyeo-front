import './App.css';
import React,{useState} from 'react';
// import axios from 'axios';
import {Header, Nav, Map, Footer, Division, Login, Search, Join, Friend, MypageUi, NewMeeting} from './components/main';

function App() {
  let article = null;
  const [mode, setMode] = useState("index");
  const [friendMode,setFriendMode] = useState("friendList");
  const [friendHandler,setFriendHandler] = useState(false);
  const [newMeetingBtn,setNewMeetingBtn] = useState("make");
  const [moyeoList,setMoyeoList] = useState([ //setMoyeoList는 약속추가하기, 새로운 약속잡기를 통해 사용될 예정
    {key : 1, title : "회운님과 약속", peoples : "(2)", value : ["장준수","정회운"]},
    {key : 2, title : "다솜님과 약속", peoples : "(2)", value : ["장준수","이다솜"]},
    {key : 3, title : "프로젝트 약속", peoples : "(5)", value : ["장준수","정회운","이다솜","최강현","황수경"]}
  ]);

  const [activeList,setActiveList] = useState();
  console.log(activeList);
  console.log(mode);

  const [myInfomation,setMyInfomation] = useState({
    idKey : 0, id : "admin", password : "admin1234", name : "장준수", nickName : "운영자"
  });

  if(mode === "index"){
    article = <Map moyeoList={moyeoList} onChange={(id)=>{
      setActiveList(id);
    }}/>
  }else if(mode === "center-search"){
    article = <><Map moyeoList={moyeoList} onChange={(id)=>{
      setActiveList(id);
    }}/><NewMeeting myInfomation={myInfomation} onChange={(id)=>{
      setMode(id)
    }} onFriendMode={(id)=>{
      setFriendMode(id);
    }} onClose={(handleId)=>{
      setFriendHandler(handleId);
    }} onMode={(btnId)=>{
      setNewMeetingBtn(btnId);
    }}/></>
  }else if(mode === "calculator"){
    article = <Division moyeoList={moyeoList}/>
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
    article = <MypageUi myInfomation={myInfomation} moyeoList={moyeoList} mode={mode}/>
  }else if(mode === "myPage_history"){
    article = <MypageUi myInfomation={myInfomation} moyeoList={moyeoList} mode={mode}/>
  }

  return (
    <div className="App">
      <Header onChange={(className)=>{
        setMode(className);
      }}/>
      <Nav onChange={(className)=>{
        setMode(className);
      }}/>
      {article}
      <Friend friendMode={friendMode} friendHandler={friendHandler} newMeetingBtn={newMeetingBtn}
      onChange={(id)=>{
        setFriendMode(id);
      }}
      onClose={(handleId)=>{
        setFriendHandler(handleId);
      }}
      onMode={(btnId)=>{
        setNewMeetingBtn(btnId)
      }}
      onNewMeeting={(id)=>{
        setMode(id);
      }}/>
      <Footer />
    </div>
  );
}

export default App;