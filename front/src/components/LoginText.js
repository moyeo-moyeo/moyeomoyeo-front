import styled from "styled-components";

export default function LoginText() {

    return <loginText className="loginText">
      <Text>로그인</Text>
    
      <FormDiv>
        <FormP>아이디 : </FormP>
        <input className="loginInputBtn" placeholder="아이디를 입력하세요" type="text" name="username" />

        <FormP>비밀번호 : </FormP>
        <input className="loginInput" placeholder="비밀번호를 입력하세요" type="password" name="password" />

        <input className="loginBtn" type="submit" value="로그인하기"/>

      </FormDiv>
    </loginText>
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
 