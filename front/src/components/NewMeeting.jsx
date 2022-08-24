import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import '../css/newMeeting.css';

export default function NewMeeting() {
  const [myData,setMyData] = useState({ //임시데이터
    id:'admin', name:'장준수', password: 'abcdefg'
  })

  let newMeetingFriends = [<div key='0' className="add-meeting-friends"><span>본인({myData.name})</span><span>위치를 설정해 주세요.</span><a href="/">위치 설정</a></div>];
  newMeetingFriends.push(<div key='1' className="add-meeting-friends"><span>정회운</span><span>위치를 설정해 주세요.</span><a href="/">위치 설정</a></div>)

  return <div className="new-meeting-background">
    <div className="new-meeting">
      <h2>새로운 약속 만들기</h2>
      <NavLink to="/" className="close-new-meeting">X</NavLink>
      {newMeetingFriends}
      <div className="new-meeting-btn">
        <button id="new-meeting-friends">인원 추가하기</button>
        <button id="new-meeting-add">약속 생성</button>
      </div>
    </div>
  </div>
}