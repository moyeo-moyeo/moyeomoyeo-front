import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
// import axios from 'axios';


function App() {
  return (
      <BrowserRouter basename="">
        <Routes>     
          <Route path = "/" element = {<Home />}/>
          <Route path = "/Join" element = {<Join />}/>
          <Route path = "/Login" element = {<Login />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
