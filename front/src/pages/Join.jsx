import "../css/join.css";
import { useEffect, useState } from "react";
import { ApiRq } from "../utils/apiConfig";
import axios from "axios";

export default function Join() {
  /**
   * 회원가입 요청 시 필요 데이터
   */
  const [requestBody, setRequestBody] = useState({
    loginId: "",
    password: "",
    confirmPassword: "",
    username: "",
    nickname: "",
    birthDate: "",
    email: "", //차후 수정
    emailAddress: "direct input", //기본값 : 직접입력
    emailCertification: "", //이메일 인증번호
  });
  /**
   * 비밀번호, 비밀번호 확인 체크 값 -> 같으면 true, 다르면 false
   */
  const [passwordCheck, setPasswordCheck] = useState(false);
  /**
   * 회원가입 데이터 바인딩
   * @param e
   */
  const handleValue = (e) => {
    const { name, value } = e.target;
    setRequestBody((previousState) => {
      return { ...previousState, [name]: value };
    });
  };
  /**
   * 비밀번호, 비밀번호 확인 같은지 체크
   */
  useEffect(() => {
    setPasswordCheck(
      requestBody.password !== "" &&
        requestBody.password === requestBody.confirmPassword
    );
  }, [requestBody.password, requestBody.confirmPassword]);

  /**
   * 비밀번호 예외 문구
   */
  const passwordErrorText = () => {
    let text = "";
    if (requestBody.password === "") text = "비밀번호를 입력해주세요";
    else text = "";
    return text;
  };
  /**
   * 비밀번호 확인 예외 문구
   */
  const passwordConfirmErrorText = () => {
    let text = "";
    if (requestBody.confirmPassword === "") text = "비밀번호를 입력해주세요";
    else if (!passwordCheck) text = "비밀번호를 확인해주세요";
    else text = "";
    return text;
  };

  /**
   * 아이디 중복검사 요청
   */
  const getDuplicateIdRq = () => {
    // Get /loginid/duplicate?loginid="test"
    if (true) {
      //   axios.get('/loginid/duplicate?loginid="test"');
      ApiRq("GET", '/loginid/duplicate?loginid="test"');
      alert("아이디 중복검사 요청 중");
    }
  };
  /**
   * 닉네임 중복검사 요청
   */
  const getDuplicateNicknameRq = () => {
    if (true) {
      alert("닉네임 중복검사 요청 중");
    }
  };

  const postJoinRq = () => {
    if (true) {
      alert("로그인 요청 중");
    }
  };

  return (
    <div className="join-wrapper">
      <header className="join-header">
        <p className="join-title">모여모여</p>
      </header>
      <main className="join-contents">
        <div>
          <p>아이디 : </p>
          <div>
            <input
              className="join-input-with-btn"
              value={requestBody.loginId}
              placeholder="아이디를 입력하세요"
              type="text"
              name="loginId"
              onChange={handleValue}
            />
            <button className="join-duple-btn" onClick={getDuplicateIdRq}>
              중복확인
            </button>
          </div>
        </div>
        <div>
          <p>비밀번호 : </p>
          <input
            className="join-input"
            value={requestBody.password}
            placeholder="비밀번호를 입력하세요"
            type="password"
            name="password"
            onChange={handleValue}
          />
          <div className="join-error">{passwordErrorText()}</div>
        </div>
        <div>
          <p>비밀번호 재확인 :</p>
          <input
            className="join-input"
            value={requestBody.confirmPassword}
            placeholder="비밀번호를 입력하세요"
            type="password"
            name="confirmPassword"
            onChange={handleValue}
          />
          <div className="join-error">{passwordConfirmErrorText()}</div>
        </div>
        <div>
          <p>이름 : </p>
          <input
            className="join-input"
            value={requestBody.username}
            placeholder="사용자의 이름을 입력하세요"
            type="text"
            name="username"
            onChange={handleValue}
          />
        </div>
        <div>
          <p>닉네임 : </p>
          <div>
            <input
              className="join-input-with-btn"
              value={requestBody.nickname}
              placeholder="닉네임을 입력하세요"
              type="text"
              name="nickname"
              onChange={handleValue}
            />
            <button className="join-duple-btn" onClick={getDuplicateNicknameRq}>
              중복확인
            </button>
          </div>
        </div>
        <div>
          <p>생년월일 : </p>
          <input
            className="join-input"
            value={requestBody.birthDate}
            placeholder="사용자의 생년월일을 입력하세요"
            type="text"
            name="birthDate"
            onChange={handleValue}
          />
        </div>
        <div>
          <p>이메일 : </p>

          <div className="join-phone-div">
            <input
              className="join-input-with-btn"
              placeholder="이메일을 입력하세요"
              type="text"
              name="email"
              onChange={handleValue}
              value={requestBody.email}
            />
            <select
              className="telecom"
              name="emailAddress"
              value={requestBody.emailAddress}
              onChange={handleValue}
            >
              <option value="naver.com">네이버</option>
              <option value="daum.net">다음</option>
              <option value="google.com">구글</option>
              <option value="direct input">직접입력</option>
            </select>
          </div>
          <div>
            <input
              className="join-input"
              placeholder="인증번호를 입력하세요"
              name="emailCertification"
              value={requestBody.emailCertification}
              onChange={handleValue}
            />
          </div>
          <button className="join-duple-btn">인증받기</button>
        </div>
        <div>
          <button className="join-btn" onClick={postJoinRq}>
            가입하기
          </button>
        </div>
      </main>
    </div>
  );
}
