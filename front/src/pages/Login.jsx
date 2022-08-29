import {ApiRq} from "../utils/apiConfig";

import '../css/login.css';
import {useState} from "react";

export default function Login() {

    /**
     * 회원가입 요청 시 필요 데이터
     */
    const [requestBody,setRequestBody] = useState(
        {
            loginId:'',
            password:'',
        }
    )
    /**
     * 회원가입 데이터 바인딩
     * @param e
     */
    const handleValue = e => {
        const { name, value } = e.target;
        setRequestBody(previousState => {
            return { ...previousState, [name]: value };
        });
    };
    /**
     * 비밀번호 찾기 요청
     */
    const getFindPwRq = () => {
        if(true){
            alert("아이디 중복검사 요청 중")
        }

    }
    /**
     * 아이디 찾기 요청
     */
    const getFindIdRq = () => {
        if(true){
            alert("닉네임 중복검사 요청 중")
        }
    }

    const postLoginRq = () => {
        if(true){
            alert("로그인 요청 중")
        }else{
            // ApiRq('post','' , '')//요청
            //     .then(() => {//요청 처리
            //     })
            //     .catch(res => {//예외처리
            //     })
        }
    }


    return (
        <div className="login-wrapper">
            <header className="login-header">
                <p className='login-title'>로그인</p>
            </header>
            <main className="login-contents">
                <div>
                    <p>아이디</p>
                    <input
                        className="login-id-input"
                        value={requestBody.loginId}
                        placeholder="아이디를 입력하세요"
                        type="text"
                        name="loginId"
                        onChange={handleValue}
                    />
                </div>
                <div>
                    <p>비밀번호</p>
                    <input
                        className="login-pw-input"
                        value={requestBody.password}
                        placeholder="비밀번호를 입력하세요"
                        type="password"
                        name="password"
                        onChange={handleValue}
                    />
                </div>
                <div>
                    <button
                        className="login-submit"
                        onClick={postLoginRq}
                    >
                        로그인
                    </button>
                </div>
                <div className="pop-up-btn">
                    <span id="search-id" className="hover-point" onClick={getFindIdRq}>
                        아이디 찾기
                    </span>
                    <span id="search-pw" className="hover-point" onClick={getFindPwRq}>
                        비밀번호 찾기
                    </span>
                    <span id="join" className="hover-point" onClick={()=>{window.location.href="/join"}}>
                        회원가입
                    </span>
                </div>
            </main>
        </div>
    )
}