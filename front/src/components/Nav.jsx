import '../css/nav.css';
import {NavLink} from 'react-router-dom'

export default function Nav() {

  return <nav className="nav">
    <NavLink to='/newmeeting' className="center-search">너와 나의 중간지점 찾기</NavLink>
    <NavLink to='/division' className="calculator">친구랑 N빵 계산하기</NavLink>
    <NavLink to='/mypage/history' className="mypage-history">과거사용내역</NavLink>
  </nav>
}