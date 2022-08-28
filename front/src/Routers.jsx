import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Map from './components/Map'
import Mypage from './components/Mypage/Mypage'
import Division from './components/Division'
import History from './components/Mypage/History'
import Login from './components/Login'
import SearchId from './components/SearchId'
import SearchPw from './components/SearchPw'
import Join from './components/Join'

export default function Routers(props) {

    return (<>
        <Header loginState={props.loginState} setLoginState={props.setLoginState} />
        <Nav/>
        <Footer/>
        <Switch>
            <Route exact path='/' component={Map}/>
            <Route exact path='/join' component={Join}/>
            <Route exact path='/mypage' component={Mypage}/>
            <Route exact path='/division' component={Division}/>
            <Route exact path='/mypage/history' component={History}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/login/search_id' component={SearchId}/>
            <Route exact path='/login/search_pw' component={SearchPw}/>
        </Switch>
    </>
    );
}