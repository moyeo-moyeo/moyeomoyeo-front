import '../css/nav.css';
import '../css/newMeeting.css';
import React,{useState} from "react";
import { NavLink } from "react-router-dom";

function NewMeeting(props) {
  const [myData,setMyData] = useState({ //임시데이터
    id:'admin', name:'장준수', password: 'abcdefg'
  })

  let newMeetingFriends = [<div key='0' className="add-meeting-friends"><span>본인({myData.name})</span><span>위치를 설정해 주세요.</span><a href="/">위치 설정</a></div>];
  newMeetingFriends.push(<div key='1' className="add-meeting-friends"><span>정회운</span><span>위치를 설정해 주세요.</span><a href="/">위치 설정</a></div>)

  return <div className="new-meeting-background">
    <div className="new-meeting">
      <h2>새로운 약속 만들기</h2>
      <a href='/' className="close-new-meeting" onClick={event =>{
      event.preventDefault();
      props.setNewMeeting(!props.newMeeting);
    }}>X</a>
      {newMeetingFriends}
      <div className="new-meeting-btn">
        <button id="new-meeting-friends">인원 추가하기</button>
        <button id="new-meeting-add">약속 생성</button>
      </div>
    </div>
  </div>
}

export default function Nav() {
  const [newMeeting, setNewMeeting] = useState (false);

  return <>
  <nav className="nav">
    <a href='/' className="center-search" onClick={event =>{
      event.preventDefault();
      setNewMeeting(!newMeeting);
    }}>너와 나의 중간지점 찾기</a>
    <NavLink to='/division' className="calculator">친구랑 N빵 계산하기</NavLink>
    <NavLink to='/mypage/history' className="mypage-history">과거사용내역</NavLink>
  </nav>
  {newMeeting === true && <NewMeeting newMeeting={newMeeting} setNewMeeting={setNewMeeting}/>}
  </>
}