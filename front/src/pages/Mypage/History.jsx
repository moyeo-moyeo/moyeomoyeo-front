function HistoryList(props) {
    // let historyList = [];
    // let listSet = props.moyeoList;
    // for(let i = 0; i < props.moyeoList.length; i++){
    //     historyList.push(<li key={listSet[i].key} className='moyeo-history-list'>
    //     <a id={'/moyeoList/'+listSet[i].key} href={'/entryList/'+listSet[i].key}>{listSet[i].title}</a></li>);
    // }

    return <div className='history-list'>
    <h2>History</h2>
    <ul>
    {/* {historyList} */}
    </ul>
    </div>
}

function HistoryBody(props){
    // let historyContents = [];
    // let key = 1;
    // let keyNum = key[key.length-1]-1;
    // let moyeoListValues = props.moyeoList[keyNum].value;
    // for(let i = 0; i < moyeoListValues.length; i++){
    //     historyContents.push(<p key={i}>{props.moyeoList[keyNum].value[i]}</p>);
    // }

    return (
        <div className='history-body'>
            <div className='meet-adress'>중간 지점</div>
            <div className='meet-firend'>만난 친구</div>
            {/* {historyContents} */}
            <div className='meet-store'>방문한 곳</div>
            <div className='meet-division'>정산</div>
        </div>
    )
}

export default function History() {

    return(<>
        <HistoryList/>
        <HistoryBody/>
    </>
    );
  }