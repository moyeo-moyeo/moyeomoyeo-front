import React,{useState,useEffect} from 'react';

function SelectList(props) {
  const list = [];
  for(let i = 0; i < props.moyeoList.length; i++){
    let data = props.moyeoList[i];
    list.push(<li key={data.key} className='moyeo-list'>
      <a id={'/moyeoList/'+data.key} href={'/entryList/'+data.key} onClick={event =>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{data.title} {data.peoples}</a>
    </li>)
  }

  return <div className='moyeo-section'>
    <ul>
      {list}
    </ul>
  </div>
}

function MainCalculator(props) {
  let mainSection,value,answer,persons,place,payment = null;
  const [paymentList,setPaymentList] = useState([]);
  const [payList,setPayList] = useState([]);
  const [sumMoney,setSumMoney] = useState();
  useEffect(()=>{
    console.log(paymentList[paymentList.length-1]);
    let newList = paymentList[paymentList.length-1];
    for(let j = 0; j < props.moyeoList.length; j++){
      let data = props.moyeoList[j];
      for(let i = 0; i < data.value.length; i++){
        if(newList.persons === data.value[i] && sumMoney.length === 0){
          setSumMoney({id : newList.persons, pay : newList.payment});
        }
      }
    }
    console.log(sumMoney);
  },[paymentList])
  for(let i = 0; i < props.moyeoList.length; i++){
    let data = props.moyeoList[i];
    if(props.calculator === '/moyeoList/'+data.key){
      for(let j = 0; j < data.value.length; j++){
        value = <>{value}
          <option>
            {data.value[j]}
          </option>
        </>;
        answer = <>{answer}
        <p className='output-answer-list'>{data.value[j]}님은 {sumMoney}원을 계산하셨습니다.</p>
        </>
      }
      answer = <>{answer}
      <h2 className='output-solution'>???님이 ???님에게 000원을 송금해야 합니다.</h2>
      </>
      mainSection = <>
        <h2 className='main-section-title'>
          <p>{data.title} {data.peoples}</p>
        </h2>
        <div className='main-section-input'>
          <p className='input-title'>입력</p>
          <p className='pay-person'>결제 한 사람</p>
          <form className='input-form'>
            <select id='pay-persons' className='pay-persons' name='people'>
              {value}
            </select>
            <p>사용처</p>
            <input id='input-place' className='input-place'></input>
            <p>결제금액</p>
            <input id='input-payment' className='input-payment' type='text' name='payment'></input>
            <input className='input-submit' type='submit' value='계산 추가하기' onClick={event => {
              event.preventDefault();
              persons = document.getElementById('pay-persons').value;
              place = document.getElementById('input-place').value;
              payment = document.getElementById('input-payment').value;
              setPaymentList([...paymentList,{ persons : {persons}, place : {place}, payment : {payment}}]);
              setPayList([...payList,<li key={Math.random()} className='output-list'><span className='output-persons'>{persons}</span><span className='output-place'>{place}</span><span className='output-payment'>{payment.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+"원"}</span></li>]);
            }}></input>
          </form>
        </div>
        <div className='main-section-output'>
          <p className='output-title'>계산</p>
          <p className='pay-list'>결제 목록</p>
          <div className='pay-list-box'><ul>{payList}</ul></div>
          <p className='output-answer'>계산 결과</p>
          {answer}
          <button className='output-share'>공유</button>
          <button className='output-clear'>초기화</button>
        </div>
      </>
    }
  }
  return <div className='main-calculator'>{mainSection}</div>
}

export default function Division(props) {

  const [calculator,setCalculator] = useState('/moyeoList/'+props.moyeoList[0].key);

  return <article className="article">
    <div className="division-title">
      <h1>친구랑 N빵 계산하기</h1>
      <p>오늘 친구와 사용한 금액 계산하기</p>
    </div>
    <section className='division-section'>
        <SelectList moyeoList={props.moyeoList} onChangeMode={(id) => {
          setCalculator(id);
        }}/>
        <MainCalculator calculator={calculator} moyeoList={props.moyeoList}/>
    </section>
  </article>
}