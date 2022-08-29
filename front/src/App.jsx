import React,{useState} from 'react';
import Routers from './Routers'
import './css/mainPage.css';
import './css/theme.css';

/**
 * 전역상태 관리, 전역 스타일, theme, Routers.jsx 만
 * @returns {JSX.Element}
 * @constructor
 */

function App() {


  const [loginState,setLoginState] = useState("logined");

  return (
    <React.StrictMode>
      <Routers loginState={loginState} setLoginState={setLoginState}/>
    </React.StrictMode>
  )
}

export default App;