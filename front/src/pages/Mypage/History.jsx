import React,{useState} from "react";
import { Route, Switch, NavLink, useParams } from "react-router-dom";
import '../../css/history.css'

const moyeoList = [ //임시데이터
{id : 1, title : "회운님과 약속", peoples : "(2)", value : ["장준수","정회운"]},
{id : 2, title : "지수님과 약속", peoples : "(2)", value : ["장준수","성지수"]},
{id : 3, title : "프로젝트 약속", peoples : "(5)", value : ["장준수","정회운","성지수","최강현","황수경"]}
];

function HistoryList() {
    let historyList = [];
    for(let i = 0; i < moyeoList.length; i++){
        historyList.push(<li key={moyeoList[i].id} className='moyeo-history-list'>
        <NavLink to={'/mypage/'+moyeoList[i].id}>{moyeoList[i].title}</NavLink></li>);
    }

    return <div className='history-list'>
    <h2>History</h2>
    <ul>
    {historyList}
    </ul>
    </div>
}

function HistoryBody(){

    let params = useParams();
    let history_id = params.history_id;
    let selected_list = {
        value : [moyeoList[0].value]
    }
    for(let i = 0; i < moyeoList.length; i++){
        if(moyeoList[i].id === Number(history_id)){
            selected_list = moyeoList[i];
            break;
        }
    }
    console.log(params);
    return (
        <div className='history-body'>
            <div className='meet-adress'>중간 지점</div>
            <div className='meet-firend'>만난 친구</div>
            <h3>{selected_list.value}</h3>
            <div className='meet-store'>방문한 곳</div>
            <div className='meet-division'>정산</div>
        </div>
    )
}

export default function History() {

    return(
        <article className="article">
            <div className="my-page-article">
                <NavLink to="/mypage" className="my-page-welcome">홍길동님 안녕하세요.</NavLink>
                <div className="my-page-line"></div>
                <div className="my-page-list">
                    <NavLink to="/mypage" className="my-page-fix-data">회원 수정</NavLink>
                    <NavLink to="/mypage" className="my-page-delete-data">회원 탈퇴</NavLink>
                    <a href="/mypage/history" className="history" onClick={event => {
                    event.preventDefault();
                    }}>History</a>
                </div>
            </div>
            <HistoryList />
            <Route path="/mypage/:history_id" component={HistoryBody}/>
        </article>
    );
  }