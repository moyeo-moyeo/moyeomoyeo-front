import { NavLink } from 'react-router-dom';
import '../css/login.css';

export default function Login(props) {

  return <article className="login-article">
  <p className='login-title'>로그인</p>
  <form>
    <p>아이디</p>
    <input className="login-id-input" placeholder="아이디를 입력하세요"></input>
    <p>비밀번호</p>
    <input className="login-pw-input" placeholder="암호 입력하세요"></input>
    <input className="login-submit" type="submit" value="로그인" onClick={event => {
      event.preventDefault();
      console.log('로그인 시도');
    }}></input>
  </form>
  <div className="pop-up-btn">
    <NavLink id="search-id" to="/login/search_id">아이디 찾기</NavLink>
    <NavLink id="search-pw" to="/login/search_pw">비밀번호 찾기</NavLink>
    <NavLink id="join" to="/join">회원가입</NavLink>
  </div>
  </article>
}