import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import '../../css/myPage.css';

// function HistoryList(props) {
//   let historyList = [];
//   let listSet = props.moyeoList;
//   for(let i = 0; i < props.moyeoList.length; i++){
//     historyList.push(<li key={listSet[i].key} className='moyeo-history-list'>
//       <a id={'/moyeoList/'+listSet[i].key} href={'/entryList/'+listSet[i].key} onClick={event =>{
//       event.preventDefault();
//       props.onChangeMode(event.target.id);
//     }}>{listSet[i].title}</a></li>);
//   }

//   return <div className='history-list'>
//     <h2>History</h2>
//     <ul>
//       {historyList}
//     </ul>
//   </div>
// }

// function HistoryBody(props){
//   let historyContents = [];
//   let key = 1;
//   let keyNum = key[key.length-1]-1;
//   let moyeoListValues = props.moyeoList[keyNum].value;
//   for(let i = 0; i < moyeoListValues.length; i++){
//     historyContents.push(<p key={i}>{props.moyeoList[keyNum].value[i]}</p>);
//   }
  
//   return <div className='history-body'>
//     <div className='meet-adress'>중간 지점</div>
//     <div className='meet-firend'>만난 친구</div>
//     {historyContents}
//     <div className='meet-store'>방문한 곳</div>
//     <div className='meet-division'>정산</div>
//   </div>
// }

export default function MyPage() {
  const [myData,setMyData] = useState({ //임시데이터
    id:'admin', name:'장준수', password: 'abcdefg'
  })
  const [moyeoList,setMoyeoList] = useState([ //임시데이터
    {key : 1, title : "회운님과 약속", peoples : "(2)", value : ["장준수","정회운"]},
    {key : 2, title : "지수님과 약속", peoples : "(2)", value : ["장준수","성지수"]},
    {key : 3, title : "프로젝트 약속", peoples : "(5)", value : ["장준수","정회운","성지수","최강현","황수경"]}
  ]);

  return <article className="article">
    <div className="my-page-article">
      <NavLink to="/mypage" className="my-page-welcome">홍길동님 안녕하세요.</NavLink>
      <div className="my-page-line"></div>
      <div className="my-page-list">
        <NavLink to="/mypage/fix-data" className="my-page-fix-data">회원 수정</NavLink>
        <NavLink to="/mypage/delete-data" className="my-page-delete-data">회원 탈퇴</NavLink>
        <NavLink to="/mypage/history" className="history">History</NavLink>
      </div>
    </div>
    <div className="my-page-modify">
      <h2>회원 수정</h2>
      <div className='my-page-id'>
        <div>
          <p>아이디</p>
          <p>{myData.id}</p>
        </div>
      </div>
      <div className='my-page-modify-name'>
        <div>
          <p>닉네임</p>
          <p>{myData.name}</p>
        </div>
        <button className='modify-btn'>수정</button>
      </div>
      <div className='my-page-modify-pw'>
        <p>비밀번호</p>
        <button className='modify-btn'>수정</button>
      </div>
      <div className="my-page-modify">
        <h2>정말 회원을 탈퇴하시겠습니까?</h2>
        <div className='my-page-delete'>
          <div>
            <p>회원탈퇴 확인</p>
            <input type="text" className='check-delete-account' placeholder="비밀번호를 입력해 주세요."></input>
          </div>
          <button className='delete-account-btn'>탈퇴</button>
        </div>
      </div>
    </div>
  </article>
}