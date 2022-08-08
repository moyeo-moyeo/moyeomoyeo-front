import React,{useState} from 'react';
import FriendImg from '../data/friend.png';

function FriendBody(props) {
  let friendArticle = null;
  let mode = props.friendMode;
  let friendsName = [];
  let addFriendList = [];

  for(let i = 0; i < props.friendsList.length; i++){
    friendsName.push(<li>{props.friendsList[i].name}</li>);
  }

  for(let i = 0; i < props.AddList.length; i++){
    addFriendList.push(<li>{props.AddList[i].name}</li>);
  }

  if(mode === "friendList"){
    friendArticle = <ul>{friendsName}</ul>
  }else if(mode === "friendAdd"){
    friendArticle = <ul>{addFriendList}</ul>
  }else if(mode === "friendFind"){
    friendArticle = <div><form><input type="text"></input><button>OK</button></form><div>list</div></div>
  }
  return <p>{friendArticle}</p>
}

export default function Friend(props) {
  const [handler,setHandler] = useState(false);
  const [friendMode,setFriendMode] = useState("friendList");
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

  return <>
    <div className={"FriendBtn"+(handler ? " active" : "")}>
      <img className='FriendImge' src={FriendImg} alt='FriendBtn' onClick={event => {
      setHandler(!handler);
      }}></img>
      <div className="FriendDiv">
        <div className='FriendExit'><a href='/' onClick={event=>{
            event.preventDefault();
            setHandler(!handler);
          }}>X</a></div>
        <div className='FriendNav'>
          <a href='/' onClick={event=>{
            event.preventDefault();
            setFriendMode("friendList");
          }}>친구목록</a>
          <a href='/' onClick={event=>{
            event.preventDefault();
            setFriendMode("friendAdd");
          }}>친구요청</a>
          <a href='/' onClick={event=>{
            event.preventDefault();
            setFriendMode("friendFind");
          }}>친구찾기</a>
        </div>
        <div>
          <FriendBody friendMode={friendMode} friendsList={friendsList} AddList={AddList}/>
        </div>
        <div className='FriendFooter'>
          <a href='/' onClick={event=>{
            event.preventDefault();
          }}>친구관리</a>
          <a href='/' onClick={event=>{
            event.preventDefault();
          }}>약속만들기</a>
        </div>
      </div>
    </div>
  </>
}