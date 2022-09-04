import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Map from './pages/Map'
import Mypage from './pages/Mypage/MyPage'
import Division from './pages/Division'
import History from './pages/Mypage/History'
import Login from './pages/Login'
import SearchId from './pages/SearchId'
import SearchPw from './pages/SearchPw'
import Join from './pages/Join'

/**
 * 실제 페이지에 표시되는 컴포넌트(페이지마다 최상단 Root 컴포넌트)
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

//TODO::

export default function Routers(props) {

    return (
    <BrowserRouter>
        <Header loginState={props.loginState} setLoginState={props.setLoginState} />
        <Nav/>
        <Footer/>
        <Switch>
            <Route exact path='/' component={Map}/>
            <Route exact path='/join' component={Join}/>
            <Route exact path='/mypage' component={Mypage}/>
            <Route exact path='/mypage/history' component={History}/>
            <Route exact path='/division' component={Division}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/login/search_id' component={SearchId}/>
            <Route exact path='/login/search_pw' component={SearchPw}/>
        </Switch>
    </BrowserRouter>
    );
}