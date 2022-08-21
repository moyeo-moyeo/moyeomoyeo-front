import React,{useState} from 'react';
import Exit from '../data/exit_btn.png';
import '../css/search.css';

export default function Search(props) {
  const [search,setSearch] = useState(props.searchId);
  let article = null;

  const getTestAccount = {Name : "홍길동", PhoneNumber : "010-1234-5678", Id : "testdata01", Pw : "testadmin3313"}

  if(search === "search-go-id" || search === "search-id"){
    article = <div className="search-div">
      <p>이름</p>
      <input className="search-input"></input>
      <p>휴대폰인증</p>
      <select className="search-contry" form="myForm">
            <option value="korea">
                대한민국 +82
            </option>
            <option value="amerixa">
                미국 +1
            </option>
        </select>
      <select className="search-telecom" form="myForm">
            <option value="SKT">
                SKT
            </option>
            <option value="KT">
                KT
            </option>
            <option value="LG">
                LG
            </option>
            <option value="알뜰폰">
                알뜰폰
            </option>
        </select>
      <input className="search-input-withBtn" placeholder="휴대폰번호 입력"></input>
      <button className="search-sms-btn">인증받기</button>
      <input className="search-input"></input>
      <input id="search-id-submit" className="search-submit-id" type="submit" value="아이디 찾기" onClick={event=>{
        event.preventDefault();
        setSearch(event.target.id);
      }}></input>
    </div>
  }else if(search === "search-go-pw" || search === "search-pw"){
    article = <div className="search-div">
      <p>이름</p>
      <input className="search-input"></input>
      <p>아이디</p>
      <input className="search-input"></input>
      <p>휴대폰인증</p>
      <select className="search-contry">
        <option>대한민국 +82</option>
        <option>미국 +1</option>
      </select>
      <select className="search-telecom">
        <option>SKT</option>
        <option>KT</option>
        <option>LG</option>
        <option>알뜰폰</option>
      </select>
      <input className="search-input-with-btn" placeholder="휴대폰번호 입력"></input>
      <button className="search-sms-btn">인증받기</button>
      <input className="search-input"></input>
      <input id="search-pw-submit" className="search-submit-pw" type="submit" value="비밀번호 찾기" onClick={event=>{
        event.preventDefault();
        setSearch(event.target.id);
      }}></input>
    </div>
  }else if(search === "search-id-submit"){
    article = <div className="search-div-answer">
      <p className="search-answer">귀하의 아이디는 {getTestAccount.Id} 입니다. </p>
  </div>
  }else if(search === "search-pw-submit"){
    article = <div className="search-div-answer">
      <p className="search-answer">{getTestAccount.Id}의 임시비밀번호가</p>
      <p className="search-answer">문자메시지로 전송되었습니다. </p>
  </div>
  }

  return <article className="search">
    <div className="search-box">
        <h2>아이디/비밀번호 찾기</h2>
        <img id='login' className="exit-btn" src={Exit} alt="exit" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
        }}/>
      <div className='search-other-menu'>
        <a id='search-go-id' className='search-other-id' href="/" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
          setSearch(event.target.id);
        }}>아이디 찾기</a>
        <a id='search-go-pw' className='search-other-pw' href="/" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
          setSearch(event.target.id);
        }}>비밀번호 찾기</a>
      </div>
      {article}
    </div>
  </article>
}