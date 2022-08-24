import React,{useState} from 'react';
import Routers from './Routers'
import './css/mainPage.css';
import './css/theme.css';
// import axios from 'axios';

function App() {

  const [loginState,setLoginState] = useState("logined");

  return (
    <Routers loginState={loginState} setLoginState={setLoginState}/>
  )
}

export default App;