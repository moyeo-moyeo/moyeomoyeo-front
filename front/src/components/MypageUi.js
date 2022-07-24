export default function MypageUi() {

  return <article className="article">
    <div className="myPage_article">
      <p className="mypageUiP">홍길동님 안녕하세요.</p>
      <div className="mypage_line"></div>
      <div className="mypage_list">
        <a href="/" className="mypage_fix_data" onClick={event => {
          event.preventDefault();
        }}>회원 수정</a>
        <a href="/" className="mypage_delete_data" onClick={event => {
          event.preventDefault();
        }}>회원 탈퇴</a>
        <a href="/" className="history" onClick={event => {
          event.preventDefault();
        }}>History</a>
      </div>
    </div>
  </article>
}