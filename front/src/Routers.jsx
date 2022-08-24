import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Map from './components/Map'
import MyPage from './components/Mypage/MyPage'
import NewMeeting from './components/NewMeeting'
import Division from './components/Division'
import History from './components/Mypage/History'
import Login from './components/Login'
import SearchId from './components/SearchId'
import SearchPw from './components/SearchPw'
import Join from './components/Join'

function SearchIdRoute(){
    return (<>
        <Login/><SearchId/>
    </>);
}
function SearchPwRoute(){
    return (<>
        <Login/><SearchPw/>
    </>);
}
function NewMeetingRoute(){
    return (<>
        <Map/><NewMeeting/>
    </>);
}

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
            <Switch>
                <Route exact path='/' component={Map}/>
                <Route exact path='/join' component={Join}/>
                <Route exact path='/myPage' component={MyPage}/>
                <Route exact path='/myPage/history' component={History}/>
                <Route exact path='/newMeeting' component={NewMeetingRoute}/>
                <Route exact path='/division' component={Division}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/login/searchId' component={SearchIdRoute}/>
                <Route exact path='/login/searchPw' component={SearchPwRoute}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}