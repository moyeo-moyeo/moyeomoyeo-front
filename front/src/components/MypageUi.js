import React,{useState} from 'react';

function HistoryList(props) {
  let historyList = [];
  let listSet = props.moyeoList;
  for(let i = 0; i < props.moyeoList.length; i++){
    historyList.push(<li key={listSet[i].key} className='moyeo-list'>
      <a id={'/moyeoList/'+listSet[i].key} href={'/entryList/'+listSet[i].key} onClick={event =>{
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{listSet[i].title}</a></li>);
  }

  return <div className='historyList'>
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
  
  return <div className='historyBody'>
    <div className='meetAdress'>중간 지점</div>
    <div className='meetFirend'>만난 친구</div>
    {historyContents}
    <div className='meetStore'>방문한 곳</div>
    <div className='meetDivision'>정산</div>
  </div>
}

export default function MypageUi(props) {
  let myPageBody = null;
  const [myPage,setMyPage] = useState(props.mode);
  const [historyMode,setHistoryMode] = useState(1);
  
  if(myPage === "mypage_fix_data" || myPage === "myPage"){
    myPageBody = <div className="mypage_modify">
      <h2>회원 수정</h2>
      <div className='mypage_id'>
        <div>
          <p>아이디</p>
          <p>{props.myInfomation.id}</p>
        </div>
      </div>
      <div className='mypage_modify_name'>
        <div>
          <p>닉네임</p>
          <p>{props.myInfomation.name}</p>
        </div>
        <button className='modifyBtn'>수정</button>
      </div>
      <div className='mypage_modify_pw'>
        <p>비밀번호</p>
        <button className='modifyBtn'>수정</button>
      </div>
    </div>
  }else if(myPage === "mypage_delete_data"){
    myPageBody = <div className="mypage_modify">
      <h2>정말 회원을 탈퇴하시겠습니까?</h2>
      <div className='mypage_delete'>
        <div>
          <p>회원탈퇴 확인</p>
          <input type="text" className='checkDeleteAccount' placeholder="비밀번호를 입력해 주세요."></input>
        </div>
        <button className='deleteAccountBtn'>탈퇴</button>
      </div>
    </div>
  }else if(myPage === "history" || myPage === "myPage_history"){
    myPageBody = <div className="mypage_history">
      <HistoryList moyeoList={props.moyeoList} onChangeMode={id=>{
        setHistoryMode(id);
      }}/>
      <HistoryBody historyMode={historyMode} moyeoList={props.moyeoList}/>
    </div>
  }
  

  return <article className="article">
    <div className="myPage_article">
      <a href="/" className="mypageUiP" onClick={event => {
          event.preventDefault();
          setMyPage("myPage");
        }}>홍길동님 안녕하세요.</a>
      <div className="mypage_line"></div>
      <div className="mypage_list">
        <a href="/" className="mypage_fix_data" onClick={event => {
          event.preventDefault();
          setMyPage(event.target.className);
        }}>회원 수정</a>
        <a href="/" className="mypage_delete_data" onClick={event => {
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