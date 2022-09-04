import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import '../../css/myPage.css';

function MypageModify(props) {
  let Data = props.myData;
  return(
    <div className="my-page-modify">
      <h2>회원 수정</h2>
      <div className='my-page-id'>
        <div>
          <p>아이디</p>
          <p>{Data.id}</p>
        </div>
      </div>
      <div className='my-page-modify-name'>
        <div>
          <p>닉네임</p>
          <p>{Data.name}</p>
        </div>
        <button className='modify-btn'>수정</button>
      </div>
      <div className='my-page-modify-pw'>
        <p>비밀번호</p>
        <button className='modify-btn'>수정</button>
      </div>
    </div>
  );
}

function MypageWithrawal() {
  return(
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
  )
}

export default function Mypage(props) {
  const [myData,setMyData] = useState({ //임시데이터
    id:'admin', name:'장준수', password: 'abcdefg'
  })
  const [moyeoList,setMoyeoList] = useState([ //임시데이터
    {key : 1, title : "회운님과 약속", peoples : "(2)", value : ["장준수","정회운"]},
    {key : 2, title : "지수님과 약속", peoples : "(2)", value : ["장준수","성지수"]},
    {key : 3, title : "프로젝트 약속", peoples : "(5)", value : ["장준수","정회운","성지수","최강현","황수경"]}
  ]);
  const [modifyMode, setModifyMode] = useState("my-page-fix-data");

  return <article className="article">
    <div className="my-page-article">
      <NavLink to="/mypage" className="my-page-welcome">홍길동님 안녕하세요.</NavLink>
      <div className="my-page-line"></div>
      <div className="my-page-list">
        <a href="/mypage" className="my-page-fix-data" onClick={event => {
          event.preventDefault();
          setModifyMode(event.target.className);
        }}>회원 수정</a>
        <a href="/mypage" className="my-page-delete-data" onClick={event => {
          event.preventDefault();
          setModifyMode(event.target.className);
        }}>회원 탈퇴</a>
        <NavLink to="/mypage/history" className="history">History</NavLink>
      </div>
    </div>
    {modifyMode === "my-page-fix-data" ? <MypageModify myData={myData}/> : <MypageWithrawal/>}
  </article>
}