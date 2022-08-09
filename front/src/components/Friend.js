import React,{useState} from 'react';
import FriendImg from '../data/friend.png';

function FriendBody(props) {
  let friendArticle = null;
  let mode = props.friendMode;
  let friendsName = [];
  let addFriendList = [];

  for(let i = 0; i < props.friendsList.length; i++){
    friendsName.push(<li key={i} className='myFriendsList'>{props.friendsList[i].name}<input type="checkbox"></input></li>);
  }

  for(let i = 0; i < props.AddList.length; i++){
    addFriendList.push(<li key={i}><span>{props.AddList[i].name}</span><input type="button" value="수락"></input></li>);
  }

  if(mode === "friendList"){
    friendArticle = <ul className='friendUl'>{friendsName}</ul>
  }else if(mode === "friendAdd"){
    friendArticle = <ul className='friendUl'>{addFriendList}</ul>
  }else if(mode === "friendFind"){
    friendArticle = <div><form><input type="text"></input><button>OK</button></form><div>list</div></div>
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

  if(props.newMeetingBtn === "make"){
    meetingBtn = <>약속만들기</>
  }else if(props.newMeetingBtn === "making"){
    meetingBtn = <>추가하기</>
  }

  return <>
    <div className={"FriendBtn"+(props.friendHandler ? " active" : "")}>
      <img className='FriendImge' src={FriendImg} alt='FriendBtn' onClick={event => {
      props.onClose(!props.friendHandler);
      props.onMode("make");
      }}></img>
      <div className="FriendDiv">
        <div className='FriendExit'><a href='/' onClick={event=>{
            event.preventDefault();
            props.onClose(!props.friendHandler);
          }}>X</a></div>
        <div className='FriendNav'>
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
        <div>
          <FriendBody friendMode={props.friendMode} friendsList={friendsList} AddList={AddList}/>
        </div>
        <div className='FriendFooter'>
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