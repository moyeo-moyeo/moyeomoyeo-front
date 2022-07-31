export default function Nav(props) {

  return <nav className="nav">
    <a href='/' className="center-search" onClick={(event)=>{
      event.preventDefault();
      props.onChange(event.target.className);
    }}>너와 나의 중간지점 찾기</a>
    <a href='/' className="calculator" onClick={(event)=>{
      event.preventDefault();
      props.onChange(event.target.className);
    }}>친구랑 N빵 계산하기</a>
    <a href='/' className="myPage_history" onClick={(event)=>{
      event.preventDefault();
      props.onChange(event.target.className);
    }}>과거사용내역</a>
  </nav>
}