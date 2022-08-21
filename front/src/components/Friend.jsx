import React,{useState} from 'react';
import FriendImg from '../data/friend.png';
import '../css/friend.css';

function FriendBody(props) {
  let friendArticle = null;
  let mode = props.friendMode;
  let friendsName = [];
  let addFriendList = [];
  let friendFind = [];

  for(let i = 0; i < props.friendsList.length; i++){
    friendsName.push(<li key={i} className='my-friends-list'>{props.friendsList[i].name}<input type="checkbox"></input></li>);
  }

  for(let i = 0; i < props.AddList.length; i++){
    addFriendList.push(<li key={i} className='friend-request'><span>{props.AddList[i].name}</span><div className='friend-request-answer'><input type="button" value="수락"></input><input type="button" value="거절"></input></div></li>);
  }

  for(let i = 0; i < props.findUser.length; i++){
    friendFind.push(<li className='finded-list' key={i}><span>{i}. {props.findUser[i].name}</span><div className='find-user-add'><input type="button" value="추가"></input></div></li>)
  }

  if(mode === "friendList"){
    friendArticle = <ul className='friend-ul'>{friendsName}</ul>
  }else if(mode === "friendAdd"){
    friendArticle = <ul className='friend-ul'>{addFriendList}</ul>
  }else if(mode === "friendFind"){
    friendArticle = <div className='find-user-container'><form className='find-user-form'><input type="text" className='find-user-input'></input><input type="submit" className='find-user-submit' value="검색"></input></form><div>{friendFind}</div></div>
  }
  return <>{friendArticle}</>
}

export default function Friend(props) {
  let meetingBtn = null;
  const [friendsList,setFriendsList] = useState([
    {key : 0, id : "backend1", name : "정회운"},
    {key : 1, id : "backend2", name : "최강헌"},
    {key : 2, id : "projectmanager", name : "황수경"}
  ]);
  const [AddList,setAddList] = useState([
    {key : 0, id : "backend3", name : "홍길동"},
    {key : 1, id : "backend4", name : "세종"},
    {key : 2, id : "projectmanager2", name : "김서울"}
  ])
  const [findUser,setFindUser] = useState([
    {key : 0, id : "user01", name : "김유저"},
    {key : 1, id : "user02", name : "이친구"},
    {key : 2, id : "user03", name : "박코딩"},
  ])

  if(props.newMeetingBtn === "make"){
    meetingBtn = <>약속만들기</>
  }else if(props.newMeetingBtn === "making"){
    meetingBtn = <>추가하기</>
  }

  return <>
    <div className={"friend-btn"+(props.friendHandler ? " active" : "")}>
      <img className='friend-image' src={FriendImg} alt='friend-btn' onClick={event => {
      props.onClose(!props.friendHandler);
      props.onMode("make");
      }}></img>
      <div className="friend-div">
        <div className='friend-exit'><a href='/' onClick={event=>{
            event.preventDefault();
            props.onClose(!props.friendHandler);
          }}>X</a></div>
        <div className='friend-nav'>
          <a href='/' onClick={event=>{
            event.preventDefault();
            props.onChange("friendList");
          }}>친구목록</a>
          <a href='/' onClick={event=>{
            event.preventDefault();
            props.onChange("friendAdd");
          }}>친구요청</a>
          <a href='/' onClick={event=>{
            event.preventDefault();
            props.onChange("friendFind");
          }}>친구찾기</a>
        </div>
          <FriendBody friendMode={props.friendMode} friendsList={friendsList} AddList={AddList} findUser={findUser}/>
        <div className='friend-footer'>
          <a href='/' onClick={event=>{
            event.preventDefault();
          }}>친구관리</a>
          <a href='/' onClick={event=>{
            event.preventDefault();
            props.onClose(!props.friendHandler);
            props.onNewMeeting("center-search");
          }}>{meetingBtn}</a>
        </div>
      </div>
    </div>
  </>
}