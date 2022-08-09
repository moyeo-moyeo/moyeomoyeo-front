import React,{useState} from "react";

export default function NewMeeting(props) {

  let newMeetingFriends = [<div className="AddMeetingFriends"><span>본인({props.myInfomation.name})</span><span>위치를 설정해 주세요.</span><a href="/">위치 설정</a></div>];

  newMeetingFriends.push(<div className="AddMeetingFriends"><span>정회운</span><span>위치를 설정해 주세요.</span><a href="/">위치 설정</a></div>)
  return <div className="newMeetingBackground">
    <div className="newMeeting">
      <h2>새로운 약속 만들기</h2>
      <a href="/" className="closeNewMeeting" onClick={event => {
        event.preventDefault();
        props.onChange("index");
      }}>X</a>
      {newMeetingFriends}
      <div className="newMeetingBtn">
        <button id="newMeetingFriends" onClick={event=>{
          event.preventDefault();
          props.onFriendMode("friendList");
          props.onClose(true);
          props.onMode("making");
        }}>인원 추가하기</button>
        <button id="newMeetingAdd">약속 생성</button>
      </div>
    </div>
  </div>
}