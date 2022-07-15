import styled from "styled-components";

export default function JoinText() {

    return <joinText className="joinText">
      <Text>모여모여</Text>
    
      <FormDiv>
        <FormP>아이디 : </FormP>
        <JoinInputBtnDiv>    
            <input className="joinInputBtn"  placeholder="아이디를 입력하세요" type="text" name="username" />
            <button className="joinDuplBtn" onClick={() => {alert("esad")}} >중복확인</button>
        </JoinInputBtnDiv>


        <FormP>비밀번호 : </FormP>
        <input className="joinInput"  placeholder="비밀번호를 입력하세요" type="password" name="password" />

        <FormP>비밀번호 재확인 : </FormP>
        <input className="joinInput"  placeholder="비밀번호를 입력하세요" type="password" name="re-password" />
        
        <FormP>닉네임 : </FormP>
        <JoinInputBtnDiv>        
            <input className="joinInputBtn"  placeholder="닉네임을 입력하세요" type="text" name="nickname" />
            <button className="joinDuplBtn" font-size = "20px">중복확인</button>
        </JoinInputBtnDiv>

        <FormP>휴대전화 : </FormP>
        <select className="Contry" form="myForm">
            <option value="korea">
                대한민국 +82
            </option>
            <option value="amerixa">
                미국 +1
            </option>
        </select>
        <select className="Telecom" form="myForm">
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
        <input className="joinInputBtn"  placeholder="휴대전화번호를 입력하세요" type="text" name="nickname" />
        <button className="joinDuplBtn" font-size = "20px">인증받기</button>
        <input className="joinInput"  placeholder="인증번호를 입력하세요" type="text" name="password" />

        <input className="joinBtn" type="submit" value="가입하기"/>

      </FormDiv>

    </joinText>
  }

  const Text = styled.div`
    font-size: 60px;
    text-align: center;
    margin-top: 156px;
  `;

  const FormDiv = styled.div`
    width: 350px;
    margin: auto;
  `;

  const FormP = styled.div`
    margin-top: 25px;
    display: block;
    font-size: 25px;
  `;

  const JoinInputBtnDiv = styled.div`
    display: flex;
  `;
 