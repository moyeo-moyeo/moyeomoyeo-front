import React,{useState} from 'react';
import FriendImg from '../data/friend.png';
import '../css/friend.css';
import { useEffect } from 'react';

function FriendBody(props) {
  let friendArticle = null;
  let mode = props.friendMode;
  let friendsName = [];
  let addFriendList = [];
  
  /**
   * 내 정보 임시데이터
   */
  const [myData,setMyData] = useState({
    id:'admin', name:'장준수', password: 'abcdefg'
  })

  const [friendsList,setFriendsList] = useState([
    {key : 0, id : "backend1", name : "정회운"},
    {key : 1, id : "backend2", name : "최강헌"},
    {key : 2, id : "projectmanager", name : "황수경"},
    {key : 3, id : "projectmanager3", name : "홍길동"}
  ]);

  /**
   * back에서 전달 받은 검색결과 임시데이터
   */
  const [findUser,setFindUser] = useState({key : 0, id : "projectmanager3", name : "홍길동"});

  /**
   * 친구 찾기 결과값
   */
  const [friendFind,setFriendFind] = useState(<li className='finded-list' >
    <span>검색 결과가 없습니다.</span>
    <div className='find-user-add'>
    </div>
  </li>
  )

  /**
   * 검색 입력 시 결과값을 표시해주는 이벤트
   * + back에 검색값 전달 추가예정
   */
  const friendSearching = () => {
    setFriendFind(<li className='finded-list' >
        <span id='searched-user-name'>{findUser.name}</span>
        <div className='find-user-add'>
          <button onClick={(event)=>{
            event.preventDefault();
            friendAddEvent();
          }}>추가</button>
        </div>
      </li>
    )
  }

  /**
   * 사용자 본인을 대상으로 검색 시 에러 발생 이벤트
   */
  const searchForMe = () => {
    let searchValue = document.getElementById('search-value').value;
    if(searchValue === myData.name){
      alert('본인은 검색할 수 없습니다.');
      setFriendFind(<li className='finded-list' >
      <span id='searched-user-name'>본인은 검색할 수 없습니다.</span>
    </li>)
    }
  }

  /**
   * 친구요청 시 기존 친구 확인 이벤트
   */
  const friendAddEvent = () => {
    let searchedUserName = document.getElementById('searched-user-name').innerText;
    let eventAnswer = '';
    for(let i = 0; i < friendsList.length; i++){
      if(friendsList[i].name === searchedUserName){
        eventAnswer = '이미 친구가 되어 있습니다.';
        break;
      }else{
        eventAnswer = '친구 요청을 성공적으로 보냈습니다.';
      }
    }
    alert(eventAnswer);
  }

    /**
     * 기존 친구목록 List로 생성
     */
    for(let i = 0; i < friendsList.length; i++){
      friendsName.push(
        <li key={i} className='my-friends-list'>
          {friendsList[i].name}
          <input type="checkbox"></input>
        </li>
      );
    }

    /**
     * 친구추가 요청목록 생성
     */
    for(let i = 0; i < props.addList.length; i++){
      addFriendList.push(
        <li key={i} className='friend-request'>
          <span>{props.addList[i].name}</span>
          <div className='friend-request-answer'>
            <button onClick={()=>{
              alert('친구추가가 완료되었습니다.');
            }}>수락</button>
            <button onClick={()=>{
              alert('신청이 거절되었습니다.');
            }}>거절</button>
          </div>
        </li>
        );
    }
  
  if(mode === "friendList"){
    friendArticle = <ul className='friend-ul'>{friendsName}</ul>
  }else if(mode === "friendAdd"){
    friendArticle = <ul className='friend-ul'>{addFriendList}</ul>
  }else if(mode === "friendFind"){
    friendArticle = <div className='find-user-container'>
      <div className='find-user'>
        <input type="text" id='search-value' className='find-user-input' placeholder='친구의 이름을 입력하세요.'></input>
        <button className='find-user-submit' onClick={(event)=>{
          event.preventDefault();
          friendSearching();
          searchForMe();
        }}>검색</button>
      </div>
      <div>{friendFind}</div>
    </div>
  }

  return <>{friendArticle}</>
}

export default function Friend(props) {

  /**
   * 친구요청 임시데이터
   */
  const [addList,setaddList] = useState([
    {key : 0, id : "user01", name : "김유저"},
    {key : 1, id : "backend4", name : "세종"},
    {key : 2, id : "projectmanager2", name : "김서울"}
  ])


  const [friendActive,setFriendActive] = useState(false);
  const [friendMode,setFriendMode] = useState("friendList");
  
  // let meetingBtn = null;
  // if(props.newMeetingBtn === "make"){
  //   meetingBtn = <>약속만들기</>
  // }else if(props.newMeetingBtn === "making"){
  //   meetingBtn = <>추가하기</>
  // }

  return <>
    <div className={"friend-btn"+(friendActive ? " active" : "")}>
      <img className='friend-image' src={FriendImg} alt='friend-btn' onClick={event => {
      setFriendActive(!friendActive);
      setFriendMode("friendList");
      }}></img>
      <div className="friend-container">
        <div className='friend-exit'><a href='/' onClick={event=>{
            event.preventDefault();
            setFriendActive(!friendActive);
          }}>X</a></div>
        <div className='friend-nav-container'>
          <div className='friend-btn-container'>
            <a href='/' className={"friend-nav-btn" + (friendMode === "friendList" ? " active" : "")} onClick={event=>{
              event.preventDefault();
              setFriendMode("friendList");
            }}>친구목록</a>
          </div>
          <div className='friend-btn-container'>
            <a href='/' className={"friend-nav-btn" + (friendMode === "friendAdd" ? " active" : "")} onClick={event=>{
              event.preventDefault();
              setFriendMode("friendAdd");
            }}>친구요청</a>
            {addList.length > 0 && addList.length < 10 ? <div className='request-num'>{addList.length}</div> : ''}
            {addList.length > 9 ? <div className='request-num'>9+</div> : ''}
          </div>
          <div className='friend-btn-container'>
            <a href='/' className={"friend-nav-btn" + (friendMode === "friendFind" ? " active" : "")} onClick={event=>{
              event.preventDefault();
              setFriendMode("friendFind");
            }}>친구찾기</a>
          </div>
        </div>
          <FriendBody friendMode={friendMode} addList={addList}/>
        <div className='friend-footer'>
          <a href='/' onClick={event=>{
            event.preventDefault();
          }}>친구관리</a>
          <a href='/' onClick={event=>{
            event.preventDefault();
            setFriendActive(!friendActive);
            props.onNewMeeting("center-search");
          }}>
            {/* {meetingBtn} */}
          </a>
        </div>
      </div>
    </div>
  </>
}