import '../css/join.css';

export default function Join() {
    return (
        <article className="join-article">
            <p className="join-title">모여모여</p>
            <form>
                <p>아이디 : </p>
                <div>
                    <input className="join-input-with-btn"  placeholder="아이디를 입력하세요" type="text" name="username" />
                    <button className="join-dupl-btn">중복확인</button>
                </div>

                <p>비밀번호 : </p>
                <input className="join-input"  placeholder="비밀번호를 입력하세요" type="password" name="password" />

                <p>비밀번호 재확인 : </p>
                <input className="join-input"  placeholder="비밀번호를 입력하세요" type="password" name="check-password" />
                
                <p>닉네임 : </p>
                <div>
                    <input className="join-input-with-btn"  placeholder="닉네임을 입력하세요" type="text" name="nickname" />
                    <button className="join-dupl-btn">중복확인</button>
                </div>

                <p>휴대전화 : </p>
                <select className="contry" form="myForm">
                    <option value="korea">
                        대한민국 +82
                    </option>
                    <option value="amerixa">
                        미국 +1
                    </option>
                </select>
                <select className="telecom" form="myForm">
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
                <div className="join-phone-div">
                <input className="join-input-with-btn"  placeholder="휴대전화번호를 입력하세요" type="text" name="nickname" />
                <button className="join-dupl-btn">인증받기</button>
                </div>
                <input className="join-input"  placeholder="인증번호를 입력하세요" type="text" name="password" />

                <input className="join-btn" type="submit" value="가입하기"/>
            </form>
        </article>
    );
  }