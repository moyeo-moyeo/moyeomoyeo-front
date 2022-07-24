import React,{useState} from 'react';

export default function MypageUi() {
  let myPageBody = null;
  const [myPage,setMyPage] = useState("myPage");
  
  if(myPage === "myPage"){
    myPageBody = <div className="mypage_test">
    <p>내 정보</p>
  </div>
  }else if(myPage === "mypage_fix_data"){
    myPageBody = <div className="mypage_test">
      <p>회원 수정</p>
    </div>
  }else if(myPage === "mypage_delete_data"){
    myPageBody = <div className="mypage_test">
      <p>회원 탈퇴</p>
    </div>
  }else if(myPage === "history"){
    myPageBody = <div className="mypage_test">
      <p>History</p>
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