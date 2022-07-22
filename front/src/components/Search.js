import React,{useState} from 'react';
import Exit from '../data/exit_btn.png';

export default function Search(props) {
  const [search,setSearch] = useState(props.searchId);
  let article = null;

  const getTestAccount = {Name : "홍길동", PhoneNumber : "010-1234-5678", Id : "testdata01", Pw : "testadmin3313"}

  if(search === "search_go_id" || search === "search_id"){
    article = <div className="search_div">
      <p>이름</p>
      <input className="search_input"></input>
      <p>휴대폰인증</p>
      <select className="search_contry" form="myForm">
            <option value="korea">
                대한민국 +82
            </option>
            <option value="amerixa">
                미국 +1
            </option>
        </select>
      <select className="search_telecom" form="myForm">
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
      <input className="search_input_withBtn" placeholder="휴대폰번호 입력"></input>
      <button className="search_sms_btn">인증받기</button>
      <input className="search_input"></input>
      <input id="search_id_submit" className="search_submit_id" type="submit" value="아이디 찾기" onClick={event=>{
        event.preventDefault();
        setSearch(event.target.id);
      }}></input>
    </div>
  }else if(search === "search_go_pw" || search === "search_pw"){
    article = <div className="search_div">
      <p>이름</p>
      <input className="search_input"></input>
      <p>아이디</p>
      <input className="search_input"></input>
      <p>휴대폰인증</p>
      <select className="search_contry">
        <option>대한민국 +82</option>
        <option>미국 +1</option>
      </select>
      <select className="search_telecom">
        <option>SKT</option>
        <option>KT</option>
        <option>LG</option>
        <option>알뜰폰</option>
      </select>
      <input className="search_input_withBtn" placeholder="휴대폰번호 입력"></input>
      <button className="search_sms_btn">인증받기</button>
      <input className="search_input"></input>
      <input id="search_pw_submit" className="search_submit_pw" type="submit" value="비밀번호 찾기" onClick={event=>{
        event.preventDefault();
        setSearch(event.target.id);
      }}></input>
    </div>
  }else if(search === "search_id_submit"){
    article = <div className="search_div_answer">
      <p className="search_answer">귀하의 아이디는 {getTestAccount.Id} 입니다. </p>
  </div>
  }else if(search === "search_pw_submit"){
    article = <div className="search_div_answer">
      <p className="search_answer">{getTestAccount.Id}의 임시비밀번호가</p>
      <p className="search_answer">문자메시지로 전송되었습니다. </p>
  </div>
  }

  return <article className="search">
    <div className="search_box">
        <h2>아이디/비밀번호 찾기</h2>
        <img id='login' className="exit_btn" src={Exit} alt="exit" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
        }}/>
      <div className='search_other_menu'>
        <a id='search_go_id' className='search_other_id' href="/" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
          setSearch(event.target.id);
        }}>아이디 찾기</a>
        <a id='search_go_pw' className='search_other_pw' href="/" onClick={event =>{
          event.preventDefault();
          props.onChange(event.target.id);
          setSearch(event.target.id);
        }}>비밀번호 찾기</a>
      </div>
      {article}
    </div>
  </article>
}