import React,{useState} from 'react';
import '../css/myPage.css';

function HistoryList(props) {
  let historyList = [];
  let listSet = props.moyeoList;
  for(let i = 0; i < props.moyeoList.length; i++){
    historyList.push(<li key={listSet[i].key} className='moyeo-history-list'>
      <a id={'/moyeoList/'+listSet[i].key} href={'/entryList/'+listSet[i].key} onClick={event =>{
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{listSet[i].title}</a></li>);
  }

  return <div className='history-list'>
    <h2>History</h2>
    <ul>
      {historyList}
    </ul>
  </div>
}

function HistoryBody(props){
  let historyContents = [];
  let key = String(props.historyMode);
  let keyNum = key[key.length-1]-1;
  let moyeoListValues = props.moyeoList[keyNum].value;
  for(let i = 0; i < moyeoListValues.length; i++){
    historyContents.push(<p key={i}>{props.moyeoList[keyNum].value[i]}</p>);
  }
  
  return <div className='history-body'>
    <div className='meet-adress'>중간 지점</div>
    <div className='meet-firend'>만난 친구</div>
    {historyContents}
    <div className='meet-store'>방문한 곳</div>
    <div className='meet-division'>정산</div>
  </div>
}

export default function Mypage(props) {
  let myPageBody = null;
  const [myPage,setMyPage] = useState(props.mode);
  const [historyMode,setHistoryMode] = useState(1);
  
  if(myPage === "my-page-fix-data" || myPage === "my-page"){
    myPageBody = <div className="my-page-modify">
      <h2>회원 수정</h2>
      <div className='my-page-id'>
        <div>
          <p>아이디</p>
          <p>{props.myInfomation.id}</p>
        </div>
      </div>
      <div className='my-page-modify-name'>
        <div>
          <p>닉네임</p>
          <p>{props.myInfomation.name}</p>
        </div>
        <button className='modify-btn'>수정</button>
      </div>
      <div className='my-page-modify-pw'>
        <p>비밀번호</p>
        <button className='modify-btn'>수정</button>
      </div>
    </div>
  }else if(myPage === "my-page-delete-data"){
    myPageBody = <div className="my-page-modify">
      <h2>정말 회원을 탈퇴하시겠습니까?</h2>
      <div className='my-page-delete'>
        <div>
          <p>회원탈퇴 확인</p>
          <input type="text" className='check-delete-account' placeholder="비밀번호를 입력해 주세요."></input>
        </div>
        <button className='delete-account-btn'>탈퇴</button>
      </div>
    </div>
  }else if(myPage === "history" || myPage === "my-page-history"){
    myPageBody = <div className="my-page-history">
      <HistoryList moyeoList={props.moyeoList} onChangeMode={id=>{
        setHistoryMode(id);
      }}/>
      <HistoryBody historyMode={historyMode} moyeoList={props.moyeoList}/>
    </div>
  }
  

  return <article className="article">
    <div className="my-page-article">
      <a href="/" className="my-page-welcome" onClick={event => {
          event.preventDefault();
          setMyPage("my-page");
        }}>홍길동님 안녕하세요.</a>
      <div className="my-page-line"></div>
      <div className="my-page-list">
        <a href="/" className="my-page-fix-data" onClick={event => {
          event.preventDefault();
          setMyPage(event.target.className);
        }}>회원 수정</a>
        <a href="/" className="my-page-delete-data" onClick={event => {
          event.preventDefault();
          setMyPage(event.target.className);
        }}>회원 탈퇴</a>
        <a href="/" className="history" onClick={event => {
          event.preventDefault();
          setMyPage(event.target.className);
        }}>History</a>
      </div>
    </div>
    <div>
      {myPageBody}
    </div>
  </article>
}