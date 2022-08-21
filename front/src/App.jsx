import React,{useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Map from './components/Map';
import Footer from './components/Footer';
import Division from './components/Division';
import Login from './components/Login';
import Search from './components/Search';
import Join from './components/Join';
import Friend from './components/Friend';
import Mypage from './components/Mypage';
import NewMeeting from './components/NewMeeting';
import './css/mainPage.css';
import './css/theme.css';
// import axios from 'axios';

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
  }else if(mode === "search-id" || mode === "search-go-id"){
    article = <><Login/><Search searchId={mode} onChange={(id)=>{
      setMode(id);
    }}/></>
  }else if(mode === "search-pw" || mode === "search-go-pw"){
    article = <><Login/><Search searchId={mode} onChange={(id)=>{
      setMode(id);
    }}/></>
  }else if(mode === "my-page"){
    article = <Mypage myInfomation={myInfomation} moyeoList={moyeoList} mode={mode}/>
  }else if(mode === "my-page-history"){
    article = <Mypage myInfomation={myInfomation} moyeoList={moyeoList} mode={mode}/>
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