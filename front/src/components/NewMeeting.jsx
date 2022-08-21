import React,{useState} from "react";
import '../css/newMeeting.css';

export default function NewMeeting(props) {

  let newMeetingFriends = [<div className="add-meeting-friends"><span>본인({props.myInfomation.name})</span><span>위치를 설정해 주세요.</span><a href="/">위치 설정</a></div>];

  newMeetingFriends.push(<div className="add-meeting-friends"><span>정회운</span><span>위치를 설정해 주세요.</span><a href="/">위치 설정</a></div>)
  return <div className="new-meeting-background">
    <div className="new-meeting">
      <h2>새로운 약속 만들기</h2>
      <a href="/" className="close-new-meeting" onClick={event => {
        event.preventDefault();
        props.onChange("index");
      }}>X</a>
      {newMeetingFriends}
      <div className="new-meeting-btn">
        <button id="new-meeting-friends" onClick={event=>{
          event.preventDefault();
          props.onFriendMode("friend-list");
          props.onClose(true);
          props.onMode("making");
        }}>인원 추가하기</button>
        <button id="new-meeting-add">약속 생성</button>
      </div>
    </div>
  </div>
}